---
name: artifacts-to-html
description: consolidate OpenSpec artifacts into one navigable index.html using infographic.css. use when the user wants a polished html digest of proposal, design, spec, tasks, reviews, or implementation artifacts.
---

# artifacts-to-html

## Scope

Use this skill only for OpenSpec artifact consolidation.

Do:
- combine related OpenSpec files into one `index.html`
- preserve traceability
- surface decisions, tasks, risks, and source maps
- use `infographic.css` as the default presentation shell

Do not:
- generate generic marketing pages
- invent project content
- split into multiple pages unless explicitly asked
- replace source artifacts with chat summaries

## Output Contract

The default deliverable is one `index.html` in the target OpenSpec directory.

The page must:
- include a clear title and short summary
- include a source map
- organize content into navigable sections
- reflect the actual source files, not a reimagined spec
- remain readable without external dependencies

## Styling Rules

- Use `infographic.css` first.
- Use local CSS only for layout gaps the library does not cover.
- Prefer shared primitives such as `ig-page`, `ig-header`, `ig-main`, `ig-footer`, `ig-callout`, and `ig-code-block`.
- Do not create a new visual system inside this skill.

## References

Treat the files in `skills/artifacts-to-html/references/` as required supporting guidance:

- `page_anatomy.md`
- `pattern_families.md`
- `required_information_modes.md`
- `semicolony-design-system.md`

Read them when shaping the page structure, choosing pattern families, or deciding how to render mixed artifact content.

## Selection Rules

When choosing how to render content:
- proposals and plans become structured sections and cards
- tasks become checklists or phased sections
- specs become requirement blocks
- reviews become findings or callouts
- code and diffs become escaped code blocks
- assumptions and uncertainties become callouts

## Non-Goals

This skill does not:
- author new product requirements
- redesign the source content
- add interactive behavior
- optimize for multi-page documentation by default

## Implementation Notes

- Use the deterministic compiler when the task is straightforward consolidation.
- Improve the generated output only when needed for clarity.
- Keep filenames lowercase and hyphenated.
- Escape all embedded source text safely.
