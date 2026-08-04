# SolarpunkTransmission

Browser-native solarpunk visual novel / fanfiction experiment with an 8-bit CRT aesthetic.

## Current State

- **Status:** playable Chapter 1 vertical slice
- **Format:** static HTML/CSS/vanilla JS, no build step
- **Scope:** title screen, branching Chapter 1 path, lore pages, passcode pages, and a standalone terminal-side narrative
- **Design focus:** mystery-first storytelling, accessible markup, and convergent branching paths

## Iteration History

- **v0.1** — prototype slice defined the core flow: title screen, signal setup, one choice, and short endings
- **v1.0** — Chapter 1 MVP completed with branching paths, convergence, endings, passcodes, glossary, and relay log
- **v1.1** — thematic naming pass; renamings aligned the setting with solarpunk language and narrative coherence

## Recent Changes (v1.1)

### Character Renaming
- **[REDACTED]** -> **Verdant Collective**: agricultural think tank / data nexus
- **[REDACTED]** -> **Axiom**: editorial figure tied to resistance infrastructure

### Why It Changed
- Better fit for the Quechua-inspired solarpunk lexicon already in the story
- Stronger contrast between extractivist systems and regenerative futures
- More coherent identity for a post-truth media landscape

## Repository Snapshot

- `index.html` — Cold Boot / entry point
- `chapter1/` — playable Chapter 1 scenes and endings
- `lore/` — glossary and Accord §8 reference material
- `passcodes.html` / `chapter1/c1-passcodes.html` — passcode ledgers
- `relay-log.html` — player scratch pad
- `solar_transition.html` — separate CRT-style GNN terminal story

## Notes

- Passcodes are for discovery only; they do not unlock gameplay advantages.
- The narrative is designed so paths diverge in approach, then converge on shared nodes.
- See `docs/` for canon, writing principles, MVP slice details, and maintainer conventions.
