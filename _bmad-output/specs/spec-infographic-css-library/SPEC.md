---
id: SPEC-infographic-css-library
companions:
  - patterns.md
  - conventions.md
  - examples.md
sources:
  - ../../brainstorming/brainstorming-session-2026-06-13-221338.md
---

> Canonical contract. This SPEC and the files in `companions:` are the complete contract for the infographic CSS library and the companion skill docs that teach an LLM how to use it.

# Infographic CSS Library

## Why

Markdown and spec artifacts are efficient for LLMs but too flat for humans who need fast comprehension. This work creates a single-theme CSS library for HTML artifacts that lets an LLM explain concepts visually with deterministic, semantic patterns instead of inventing ad hoc layouts. The pressure comes from review, explanation, and handoff use cases where a reader must understand intent, structure, tradeoffs, and impact quickly.

## Capabilities

- id: CAP-1
  intent: A user or system can render explanation-oriented HTML with one CSS file and no JavaScript framework so a human can scan the artifact quickly.
  success: A page using the library renders without external UI frameworks or script tags and shows the expected pattern families in one coherent theme.
- id: CAP-2
  intent: A user or system can represent process, comparison, structure, analysis, data, code, and risk callout content with verbose semantic class names and bounded variants.
  success: Each documented family has a canonical HTML structure and variant set, and generated markup can be validated against those names and roles.
- id: CAP-3
  intent: A companion skill can provide the CSS library docs to an LLM so the LLM can choose the right visual pattern from content without the skill making conversion decisions.
  success: The skill points the LLM at the documented patterns and examples and does not act as a separate converter or planner.

## Constraints

- V1 ships with one visual theme.
- The library is CSS-only for the core rendering surface; no React, no JavaScript charting, and no canvas-driven dependency.
- Class names must be verbose and semantic enough to disambiguate pattern family and element role.
- Variants are bounded and canonical; free-form utility class soup is not allowed.
- Chart and data visuals are explanatory approximations, not precision analytics components.
- The companion skill documents the library; it does not decide the pattern on behalf of the LLM.

## Non-goals

- Multiple themes in the first release.
- Automatic conversion from PRDs, specs, or markdown into final HTML artifacts.
- A general-purpose design system or application framework.
- JavaScript-based charting, SVG-first analytics, or high-precision visualization tooling.

## Success signal

- Given a concept-heavy artifact, an LLM can generate a single HTML document that uses the documented patterns correctly, and a human reviewer can understand the main idea, tradeoff, or action within seconds of opening it.

## Assumptions

- The first release optimizes for explanation and review, not for brand customization.
- The companion skill is the intended primary interface for LLM authorship guidance.

## Open Questions

- Should the first release include a canonical page shell around the patterns, or only the pattern blocks themselves?
