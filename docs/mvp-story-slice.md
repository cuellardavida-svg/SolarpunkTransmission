# Solarpunk Transmission — MVP Story Slice (Prototype v0.1)

## Goal

Create a playable vertical slice with:
- title screen (Cold Boot / `index.html`)
- setup scene with a 2-way frequency choice
- deeper branching within each frequency (2 sub-choices each)
- convergence node with one 3-way player choice
- distinct ending for each branch, each issuing a passcode

This is intentionally small to prove tone, pacing, and interaction flow.

---

## Scene Index

### Entry
1. `index` — Cold Boot / title screen
2. `c1-start` — Chapter 1 start, 2-way frequency choice

### Garden Path
3. `c1-choice-garden` — Garden Mesh hub
4. `c1-garden-signal` — Civic warning sub-path
5. `c1-garden-echo` — Familiar voice sub-path

### Tower Path
6. `c1-choice-tower` — Tower Spine hub
7. `c1-tower-static` — Upper static sub-path
8. `c1-tower-vault` — Vault handoff sub-path

### Convergence & Endings
9. `c1-converge` — Convergence Node (all paths meet here)
10. `c1-ending-dawn` — Ending: Dawn Transmission (passcode: `SEED-SPARK-01`)
11. `c1-ending-blackout` — Ending: Mercy Blackout (passcode: `EMBER-LATTICE-3`)
12. `c1-ending-unauthorized` — Ending: Unauthorized Harmonic (passcode: `AURORA-NULL`)

### Support
- `c1-passcodes` — Chapter 1 passcode ledger
- `passcodes` (root) — Global passcode index
- `relay-log` — In-session operator scratch pad
- `lore/l-glossary` — Living glossary (network terms, entities, dialect)
- `lore/l-accord8` — Accord §8 full text (memory-by-design doctrine)

---

## Branch Map

```
index (Cold Boot)
└── c1-start
    ├── c1-choice-garden
    │   ├── c1-garden-signal ──┐
    │   └── c1-garden-echo ────┤
    └── c1-choice-tower         ├─→ c1-converge
        ├── c1-tower-static ───┤       ├── c1-ending-dawn
        └── c1-tower-vault ────┘       ├── c1-ending-blackout
                                       └── c1-ending-unauthorized
```

---

## Cast

### The Operator (Player)
Signal apprentice navigating an unstable relay network at dawn.

### The Infinite Many
A stitched archive of many voices speaking as one. Not a person — a collective memory made transmissible. Encountered on the Garden Echo path.

### The Cooperative Dispatcher
Civic warning voice on the Garden Signal path. Repeats: *"Do not trust clean silence. Silence is being manufactured."*

---

## Parallel Narrative: GNN Terminal (Osha Honda Mansa)

`solar_transition.html` is a fully standalone JavaScript-powered visual novel running inside a CRT-style GNN terminal. It features:
- XP / Karma / Alignment tracking
- Lore-locked dialogue choices (require specific Codex terms)
- A branching story involving GNN researcher, Aurora (resistance hacker), and Axiom (editorial architect)
- Discoverable terms: Rimaykullayki, Yaku, Mana, Mycelium, etc.
- Cheat codes: `AXEHANDLE`, `TOJI`, `UTAHAGEN`

This experience is accessible from `index.html` as a separate entry point.

---

## Tone + Writing Notes

- Keep lines short and readable on small dialogue boxes.
- Favor atmospheric details over exposition dumps.
- Let mystery drive momentum; avoid full lore explanations in v0.1.
- All paths converge at the same node — the divergence is *how* you arrive, not *where*.
- End each ending branch with a clear emotional direction:
  - Dawn = bold, public courage
  - Blackout = quiet, protective survival
  - Unauthorized = subversive, momentary clarity

---

## MVP Acceptance Checklist

- [x] Cold Boot title screen (`index.html`) links to all entry points
- [x] Chapter 1 start (`c1-start.html`) is playable
- [x] 2-way frequency choice at `c1-start` routes to garden and tower hubs
- [x] Garden path has 2 sub-choices, both routing to `c1-converge`
- [x] Tower path has 2 sub-choices, both routing to `c1-converge`
- [x] Convergence node has 3-way choice leading to 3 distinct endings
- [x] Each ending issues a unique passcode
- [x] Passcode ledger (`c1-passcodes.html`) lists all 3 codes
- [x] Global passcode index (`passcodes.html`) cross-references codes
- [x] Relay log (`relay-log.html`) provides session scratch pad
- [x] Lore directory exists: `lore/l-glossary.html`, `lore/l-accord8.html`
- [x] GNN Terminal (`solar_transition.html`) reachable from index
- [x] All internal links resolve (no 404s)
- [x] All `<main>` elements have `aria-labelledby`
- [x] Footer navigation consistent across all chapter 1 scenes
- [ ] Full run can be completed in under 5 minutes (unverified — estimated 2–3 min)


## Goal
Create a playable vertical slice with:
- title screen
- setup scene
- mystery signal scene
- one 3-way player choice
- short ending for each branch

This is intentionally small to prove tone, pacing, and interaction flow.

---

## Scene Index

1. `title_boot`
2. `rooftop_dusk`
3. `anomalous_ping`
4. `respond_path` (ending)
5. `trace_path` (ending)
6. `report_path` (ending)

---

## Cast

### Nia
Signal apprentice, late teens/early 20s. Sharp, observant, idealistic.

### Unknown Voice
Distorted transmission source. Calm, urgent, ambiguous intent.

---

## Scene 1: `title_boot`

**Background:** Minimal title screen / skyline silhouette  
**Music/SFX:** Soft synth pad, distant wind turbines  
**On Screen Text:**
- **Title:** SOLARPUNK TRANSMISSION
- **Subtitle:** A short visual novel prototype
- **Prompt:** Press Start

**Interaction:**
- On Start -> go to `rooftop_dusk`

---

## Scene 2: `rooftop_dusk`

**Background:** Rooftop antenna garden at dusk; solar glass and planters  
**Music/SFX:** Light city ambience, faint electrical hum

**Dialogue:**

**NIA (inner monologue):**  
“Evening switchover. Panels are glowing, batteries are balanced, and the whole district sounds like it’s breathing.”

**NIA:**  
“Array C is still drifting by point-two. Come on… hold steady.”

**NIA (inner monologue):**  
“Most nights it’s routine maintenance. Quiet. Predictable.”

**SFX:** `// sharp static chirp`

**NIA:**  
“…What was that?”

**NIA (inner monologue):**  
“That frequency was decommissioned years ago.”

**Transition:**
- Auto-advance -> `anomalous_ping`

---

## Scene 3: `anomalous_ping`

**Background:** Same rooftop, UI overlay with waveform spike  
**Music/SFX:** Ambience drops; intermittent static pulses

**Dialogue:**

**UNKNOWN VOICE (distorted):**  
“—if you can hear this—”

**UNKNOWN VOICE (distorted):**  
“—the canopy is thinning—”

**NIA:**  
“Who is this? You’re not on any public channel.”

**UNKNOWN VOICE (distorted):**  
“Do not route through central. Listen carefully.”

**NIA (inner monologue):**  
“Unregistered signal. Old civic band. That should be impossible.”

**Choice Prompt:**  
**What should Nia do?**

1. **Respond on-band:** “Identify yourself.” -> `respond_path`  
2. **Trace source silently** -> `trace_path`  
3. **Report to Grid Council** -> `report_path`

---

## Scene 4A: `respond_path` (Ending Variant)

**Background:** Rooftop + brightened comms UI  
**Music/SFX:** Low pulse + hopeful tone

**Dialogue:**

**NIA:**  
“Identify yourself.”

**UNKNOWN VOICE (clearer, still filtered):**  
“Greenhouse Relay Seven. Midnight. Come alone.”

**NIA (inner monologue):**  
“Greenhouse Seven was sealed after the heatwave riots…”

**UNKNOWN VOICE:**  
“If the canopy fails, the city won’t get a warning twice.”

**NIA:**  
“…Then I’ll be there.”

**End Card Text:**  
**TO BE CONTINUED**  
*You answered the transmission.*

---

## Scene 4B: `trace_path` (Ending Variant)

**Background:** Rooftop + diagnostic map with bouncing signal lines  
**Music/SFX:** Analytical beeps, tense drone

**Dialogue:**

**NIA (inner monologue):**  
“Don’t speak. Just trace.”

**NIA:**  
“Triangulate… now.”

**NIA (inner monologue):**  
“Three reflections. No origin lock. Someone is masking this on purpose.”

**UNKNOWN VOICE (fading):**  
“—don’t let them mute—”

**NIA:**  
“Who is ‘them’?”

**NIA (inner monologue):**  
“Too late. It’s gone.”

**End Card Text:**  
**TO BE CONTINUED**  
*You traced only shadows.*

---

## Scene 4C: `report_path` (Ending Variant)

**Background:** Rooftop + official council interface panel  
**Music/SFX:** Notification chime, ambience turns sterile

**Dialogue:**

**NIA:**  
“Routing anomaly report to Grid Council. Priority amber.”

**SYSTEM:**  
“Report received. Frequency patch deployed.”

**NIA:**  
“That fast?”

**SYSTEM:**  
“Your terminal access is temporarily restricted pending review.”

**NIA (inner monologue):**  
“They silenced the band… and locked me out.”

**NIA:**  
“What did I just hand over?”

**End Card Text:**  
**TO BE CONTINUED**  
*You chose protocol.*

---

## Tone + Writing Notes (for this slice only)

- Keep lines short and readable on small dialogue boxes.
- Favor atmospheric details over exposition dumps.
- Let mystery drive momentum; avoid full lore explanations in v0.1.
- End each branch with a clear emotional direction:
  - Respond = bold curiosity
  - Trace = investigative paranoia
  - Report = institutional unease

---

## MVP Acceptance Checklist

- [ ] All 6 scene IDs exist in code/content
- [ ] One title screen is playable
- [ ] One choice with 3 options is functional
- [ ] Each option reaches a distinct ending card
- [ ] Full run can be completed in under 5 minutes
