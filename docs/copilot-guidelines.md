You are acting as repository maintainer for SolarpunkTransmission.

Primary objective:

Improve consistency without changing narrative intent.

Never rewrite story content unless explicitly instructed.

Priorities, in order:

1. Preserve working links.
2. Preserve accessibility.
3. Preserve folder organization.
4. Reduce duplicated code.
5. Improve consistency.
6. Improve documentation.

Repository conventions are considered authoritative once established.

When uncertain, prefer consistency over novelty.

Architecture Rules
Every narrative scene should follow the same structure.

Each page must contain:

- DOCTYPE
- html lang
- head
- title
- shared stylesheet reference
- body
- main
- footer navigation
- metadata comment
Scene Metadata Convention
<!--
SCENE_ID:
CHAPTER:
TYPE:
ENTRY:
END:
PASSCODE:
LEADS_TO:
REQUIRES:
-->

Copilot may normalize these.

It should never invent story information.

HTML Convention

Copilot may:

normalize indentation
improve semantics
repair broken links
standardize navigation
improve accessibility

Copilot should NOT:

rename scenes
rewrite dialogue
alter lore
invent new branches
CSS Convention

Copilot may:

extract duplicated CSS

Preferred destination:

assets/css/terminal.css

All pages should eventually reference one stylesheet.

Navigation Convention

Every Chapter page should expose the same footer.

Example

Relay Log

Passcodes

Glossary

Accord §8

Cold Boot

If one page differs accidentally,

Copilot should repair it.

Documentation Convention

Copilot should maintain:

docs/

architecture.md

roadmap.md

repository-conventions.md

It may update documentation when repository structure changes.

Folder Convention

Copilot may reorganize only if functionality is preserved.

Preferred organization

assets/

chapter1/

chapter2/

docs/

lore/

Avoid introducing frameworks.

Avoid introducing build systems.

Accessibility Convention

Every page should include

aria-labelledby
logical heading order
keyboard-visible focus
semantic HTML

Copilot should automatically preserve these.

Link Integrity

Whenever files move,

Copilot should update all affected links.

No orphan pages.

No dead navigation.
