# Solarpunk Transmission — MVP Story Slice (Prototype v0.1)

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
