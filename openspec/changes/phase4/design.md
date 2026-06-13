## Context

Phase 2 implemented the CSS contract and Phase 3 created canonical HTML fixtures. Phase 4 needs a single companion skill that turns those artifacts into usable guidance for an LLM or author. The repo already has a top-level `skills/` directory, so the new skill should live there as a normal project asset rather than inside OpenSpec change output.

## Goals / Non-Goals

**Goals:**
- Produce one documentation-only skill for the infographic CSS library.
- Make pattern selection explicit enough that a user can pick a family without reading the CSS source.
- Link the skill directly to the canonical example pages from Phase 3.
- Keep the skill compact, copy-ready, and honest about scope.

**Non-Goals:**
- Do not add a converter, planner, or code generation workflow.
- Do not introduce interactivity, external dependencies, or new CSS rules.
- Do not split the guidance into multiple skills or a larger docs hierarchy.

## Decisions

- Put the skill at `skills/infographic-css/SKILL.md`. This matches the repo’s existing `skills/` layout and gives the library one obvious entry point.
- Keep the skill documentation-only. The value of this phase is guidance and selection, not automation, so the skill must avoid implying it can transform source documents.
- Organize the skill around three user needs: choose a family, find the canonical example, and check the constraints. This mirrors how an LLM will actually use it.
- Reference the Phase 3 fixture files directly instead of restating their full markup. The examples are the canonical source of copy-ready HTML, so the skill should point to them rather than duplicate them.
- Keep the writing terse and procedural. A long essay would add noise; the skill should be a compact operating guide.

## Risks / Trade-offs

- [Overly broad guidance] A skill that tries to explain every nuance could become another source of ambiguity. → Mitigation: keep the skill narrow and tie every recommendation back to a canonical example.
- [False automation signal] If the skill sounds like a converter, users may expect automatic output. → Mitigation: state the non-goals plainly in the intro and repeat the boundary near any example references.
- [Duplication with PRD/spec] The same constraints appear in multiple artifacts. → Mitigation: accept the duplication because the skill must be self-contained for LLM use.

## Migration Plan

1. Write `skills/infographic-css/SKILL.md` with frontmatter, pattern selection guidance, canonical example links, and usage constraints.
2. Verify the skill points to the Phase 3 example files and not to implementation code.
3. Keep the skill aligned with the spec so future edits to the library contract can update one documentation surface.

## Open Questions

- None. Use `infographic-css` as the skill name and file path because it is the shortest clear name and matches the repo’s concise naming style.
