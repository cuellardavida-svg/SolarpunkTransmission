/**
 * transmission-queue.js
 *
 * WHY THIS EXISTS:
 * The game's narrative tells players "relay state is not stored by machine — record externally."
 * This module subverts that in a thematically resonant way: it acts as the operator's own
 * clandestine log, running in the background and quietly recording what the machine claims
 * it cannot. Saves to localStorage so the log persists across sessions and works fully offline.
 *
 * What it does:
 *  1. Auto-logs each scene visit (scene ID + page title + timestamp).
 *  2. Auto-saves any passcode found on the current page (data-passcode attribute).
 *  3. Exposes TransmissionQueue.queue(message) for players to draft offline notes.
 *  4. Exposes TransmissionQueue.getLog() so relay-log.html can read the stored data.
 *  5. Exposes TransmissionQueue.clearLog() for a full reset ("cold boot").
 */

(function (global) {
  'use strict';

  var STORAGE_KEY = 'solarpunk_relay_log';

  /** Load the current log from localStorage, returning a safe default if empty. */
  function loadLog() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return { visits: [], passcodes: [], queue: [] };
  }

  /** Persist the log object back to localStorage. */
  function saveLog(log) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
    } catch (_) {}
  }

  /** Record a visit to the current scene (avoids duplicating consecutive same-scene reloads). */
  function logVisit(log, sceneId, title) {
    var last = log.visits[log.visits.length - 1];
    if (last && last.sceneId === sceneId) return; // same scene reloaded — skip
    log.visits.push({ sceneId: sceneId, title: title, ts: Date.now() });
  }

  /** Save a passcode if it has not been recorded before. */
  function logPasscode(log, code, sceneId) {
    if (!code) return;
    var already = log.passcodes.some(function (p) { return p.code === code; });
    if (!already) {
      log.passcodes.push({ code: code, sceneId: sceneId, ts: Date.now() });
    }
  }

  // ── Auto-run on page load ──────────────────────────────────────────────────

  var main = document.querySelector('main[data-scene-id]');
  if (main) {
    var log = loadLog();
    var sceneId = main.getAttribute('data-scene-id');
    var passcode = main.getAttribute('data-passcode') || '';
    var title = document.title || sceneId;

    logVisit(log, sceneId, title);
    if (passcode) logPasscode(log, passcode, sceneId);
    saveLog(log);
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  /**
   * Queue a freeform operator note.
   * @param {string} message - The text to queue.
   * @returns {boolean} true if saved successfully.
   */
  function queue(message) {
    if (!message || !message.trim()) return false;
    var log = loadLog();
    log.queue.push({ text: message.trim(), ts: Date.now() });
    saveLog(log);
    return true;
  }

  /** Return a read-only copy of the full log. */
  function getLog() {
    return loadLog();
  }

  /** Delete a single queued note by its index. */
  function deleteQueueEntry(index) {
    var log = loadLog();
    if (index >= 0 && index < log.queue.length) {
      log.queue.splice(index, 1);
      saveLog(log);
      return true;
    }
    return false;
  }

  /** Wipe the entire log (cold boot). */
  function clearLog() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  global.TransmissionQueue = { queue: queue, getLog: getLog, deleteQueueEntry: deleteQueueEntry, clearLog: clearLog };

}(typeof window !== 'undefined' ? window : this));
