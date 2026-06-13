---
name: infographic-css
description: documentation-only usage guide for the infographic css library. use when choosing a pattern family, checking class constraints, or locating the canonical html examples.
---

# Infographic CSS

Use this skill to select the right infographic pattern and copy the canonical markup.

It does not convert source documents, plan layouts automatically, or generate CSS.

## Quick Start

1. Pick the closest pattern family.
2. Open the matching example file.
3. Copy the approved class structure.

Canonical examples:

- Page shell: `../../examples/shell/shell.html`
- Process: `../../examples/families/process.html`
- Comparison: `../../examples/families/comparison.html`
- Structure: `../../examples/families/structure.html`
- Analysis: `../../examples/families/analysis.html`
- Data: `../../examples/families/data.html`
- Code: `../../examples/families/code.html`
- Callouts: `../../examples/callouts/callouts.html`

## Pattern Selection

- `process`: sequential steps, phases, checklists, or workflows.
- `comparison`: side-by-side options, trade-offs, matrices, and feature contrasts.
- `structure`: hierarchies, parts-of-a-whole, trees, and nested relationships.
- `analysis`: qualitative judgments, statuses, or grouped assessments.
- `data`: counts, percentages, bars, stats, and chart-like summaries.
- `code`: snippets, contracts, annotated fragments, and implementation examples.

Use the page shell for the base document scaffold. Use callouts for note, tip, warning, key, and risk content inside any family.

## Constraints

- One visual theme for v1.
- One family per page.
- Zero JavaScript.
- Zero external dependencies.
- Use the approved class contract only.
- Keep callouts in the flat `ig-callout` namespace.

## Copy Rules

- Start from the canonical example that matches the content.
- Keep the class names unchanged unless the CSS contract explicitly allows the variant.
- If the content does not fit a family cleanly, choose the closest family and explain the mismatch in a callout.
- Do not mix multiple families on one page.

## When To Push Back

- If asked for interactivity, say the library is static.
- If asked for external fonts or CDNs, say the library is dependency-free.
- If asked for automatic conversion, say this skill is documentation only.

## Source of Truth

The canonical examples are the reference implementation for markup shape:

- `../../examples/shell/shell.html`
- `../../examples/families/process.html`
- `../../examples/families/comparison.html`
- `../../examples/families/structure.html`
- `../../examples/families/analysis.html`
- `../../examples/families/data.html`
- `../../examples/families/code.html`
- `../../examples/callouts/callouts.html`
