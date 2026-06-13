---
stepsCompleted: [1, 2]
inputDocuments: []
session_topic: 'Plug-in infographic CSS library for LLM-generated HTML artifacts'
session_goals: 'Design a dependency-free CSS library that can be embedded directly inside <style>...</style>, with deterministic HTML patterns an LLM can follow to create visual UIs such as process flows, comparisons, structures, matrices, charts, and code snippet blocks.'
selected_approach: 'user-selected'
techniques_used: ['Role Playing']
ideas_generated: []
context_file: ''
---

# Brainstorming Session Results

**Facilitator:** Raju
**Date:** 2026-06-13

## Session Overview

**Topic:** Plug-in infographic CSS library for LLM-generated HTML artifacts

**Goals:** Design a dependency-free CSS library that can be embedded directly inside `<style>...</style>`, with deterministic HTML patterns an LLM can follow to create visual UIs such as process flows, comparisons, structures, matrices, charts, and code snippet blocks.

### Context Guidance

No separate context file was provided. The refined idea focuses on giving LLMs a compact visual grammar for HTML generation, not on a full application framework.

### Session Setup

The working concept is to build a lightweight CSS library that can be pasted into a single HTML document using a `<style>` block. An LLM should then follow documented class names and markup patterns to produce polished infographic-style pages without React, external CSS frameworks, JavaScript dependencies, or build tooling.

The likely components to explore are:

- A small CSS library with semantic visual primitives.
- A constrained HTML pattern language that LLMs can reliably emit.
- A pattern catalog for common information structures.
- A skill or prompt workflow that maps source content to the right visual pattern.
- Example UIs for sequential/process, comparison/contrast, general-to-specific structures, cause-effect matrices, chart/data visuals, and code snippets.
- Optional future converter tooling, but only after the CSS pattern library is clear.

## Technique Selection

**Approach:** User-Selected Techniques

**Selected Techniques:**

- **Role Playing:** Generate ideas from multiple stakeholder perspectives to uncover what the library must satisfy for LLM authors, human readers, developers, maintainers, and artifact owners.

**Selection Rationale:** The library has multiple audiences with different constraints. Role Playing is useful here because the LLM needs deterministic syntax, the human reader needs clarity, the developer needs copy-paste integration, and the maintainer needs a small coherent API.

## Technique Execution Notes

### Role Playing

**Stakeholder 1: LLM Author**

**[LLM Author #1]: Pattern Contracts**  
_Concept_: Every visual pattern should have a strict contract: required wrapper class, required child classes, allowed variants, and a tiny HTML example. The LLM should not invent layout structure; it should choose from named patterns like `info-process`, `info-compare`, `info-matrix`, `info-bars`, and `info-code`.  
_Novelty_: Instead of treating CSS as styling utilities, the library becomes a visual grammar for LLMs.

**User Direction:** Prioritize stricter pattern names and richer examples. The LLM should not infer too much from generic utility classes; it should select from explicit pattern families and copy/adapt examples.

**[LLM Author #2]: Example-Led Grammar**  
_Concept_: Each pattern should ship with minimal, standard, and rich examples. The LLM can choose the smallest valid shape or expand into a more expressive version without inventing new structure.  
_Novelty_: The examples are not just documentation for humans; they are the primary API surface for the LLM.

**User Direction:** Prefer verbose semantic class names over shorter reusable names. The library should favor generated-output reliability and clear intent over compact markup.

**[LLM Author #3]: Self-Describing Markup**  
_Concept_: Every class name should answer two questions: which pattern does this belong to, and what role does this element play? For example, `ig-process-step-title` is more reliable than `ig-title` because the LLM sees the pattern and role in one token.  
_Novelty_: The class naming itself becomes part of the prompt guidance, reducing the amount of instruction needed elsewhere.

**[LLM Author #4]: Bounded Variants**  
_Concept_: Patterns should support variants, but only as a small canonical set with documented use cases. Variants might include `compact`, `split`, `dense`, `numbered`, or `accented`, but each should preserve the same required child structure.  
_Novelty_: The LLM gets expressive flexibility without structural freedom, so visual diversity does not come at the cost of malformed markup.

**Stakeholder 2: Human Reader**

**[Human Reader #1]: Change + Impact View**  
_Concept_: Generated artifacts should immediately show what the LLM is trying to convey or execute, especially when the source artifact describes a change. For example, a database schema index edit should be represented as a compact visual diff plus an impact panel explaining affected tables, queries, migrations, risks, and downstream behavior.  
_Novelty_: The visual output is not just a styled document; it becomes an execution comprehension layer over existing artifacts like OpenSpec, Spec Kit, or LLM context.

**User Direction:** Human readers such as developers, product managers, or reviewers should quickly understand the LLM's intended action. The example image suggests directional pros/cons arrows and contrastive impact visualization as useful primitives.

**[Library Scope #1]: Visual Explanation Toolkit**  
_Concept_: The library's main job is to provide UI tools that help an LLM explain concepts to humans. The implementation logic, pattern-selection rules, and artifact interpretation should live in a separate skill, while the CSS library stays focused on reusable visual primitives and canonical HTML examples.  
_Novelty_: This cleanly separates "visual language" from "authoring intelligence": CSS defines what can be rendered, and the skill defines when to use each pattern.

**[Skill Scope #1]: Documentation Carrier**  
_Concept_: The skill should primarily provide the LLM with documentation for the CSS library: available patterns, required markup, variants, examples, and usage constraints. It should not behave as a separate converter or rigid planner; the LLM uses the docs to choose the appropriate visual pattern for the given content.  
_Novelty_: The skill becomes a compact, high-signal API manual optimized for LLM consumption rather than a workflow engine.

**Stakeholder 3: Developer Integrator**

**[Developer Integrator #1]: CSS File + Example HTML Source**  
_Concept_: The primary developer-facing package should be a separate `infographic.css` file plus example HTML files for each pattern. The CSS can later be embedded into `<style>...</style>` by an LLM or template, but maintainability should come from a real source file and canonical examples.  
_Novelty_: The library supports both maintainable development and single-file artifact generation without making the single-file artifact the source of truth.

**[Developer Integrator #2]: Single Theme First**  
_Concept_: The first version should ship one coherent visual theme rather than multiple theme classes. CSS variables can be used internally to keep future theming possible, but the public documentation should focus on one polished default look.  
_Novelty_: This avoids turning the first release into a design-system project and keeps LLM instructions smaller.

**Pivot:** Move from stakeholder requirements into the actual pattern catalog. Focus on concrete visual blocks, strict class names, required HTML structures, and a small set of variants.

**[Pattern Catalog #1]: Process Pattern**  
_Concept_: A strict process pattern for explaining ordered progression. The LLM uses it when content contains phases, ordered steps, lifecycle stages, roadmap items, or first-this-then-that logic. The process family should support timeline, roadmap, pipeline, and checklist variants.  
_Novelty_: Instead of generic cards, the pattern visually encodes sequence, direction, and progress while keeping one recognizable family.

**[Pattern Catalog #2]: Comparison Pattern**  
_Concept_: A strict comparison pattern for explaining contrast, tradeoffs, alternatives, before/after states, pros/cons, overlap, and selection criteria. The comparison family should support pros/cons arrows, before/after, side-by-side compare, Venn-style overlap, and decision matrix variants.  
_Novelty_: The pattern lets LLMs explain difference and tradeoff visually instead of producing plain bullet lists.

**[Pattern Catalog #3]: Structural Pattern**  
_Concept_: A general-to-specific pattern for breaking a central concept into parts, pillars, layers, spokes, nested components, circular models, or anatomy-style diagrams. The family should include pillars, hub-and-spoke, layer cake, nested breakdown, circular model, and anatomy diagram variants.  
_Novelty_: The pattern gives LLMs a way to show composition and hierarchy visually, not just as nested markdown headings.

**[Pattern Catalog #4]: Analysis Pattern**  
_Concept_: A cause-and-effect and matrix pattern family for explaining relationships, consequences, risk, impact, dependencies, and decision outcomes. The family should include 2x2 matrix, risk/impact grid, cause-effect chain, fishbone-style cause map, input/output dependency map, and decision consequence map variants.  
_Novelty_: The pattern lets LLMs show reasoning structure and causal relationships visually rather than burying analysis in paragraphs.

**[Pattern Catalog #5]: Data Pattern**  
_Concept_: A CSS-only chart and data display family for explanatory metrics, simple quantities, progress, status, distributions, and compact dashboards. The family should include metric cards, horizontal bars, stacked bars, progress rings, sparkline-style strips, distribution blocks, scorecards, and status dashboard variants.  
_Novelty_: The pattern gives LLMs a safe way to visualize lightweight quantitative information without JavaScript, SVG generation, canvas, or external charting libraries.

**[Pattern Catalog #6]: Code Pattern**  
_Concept_: A code snippet UI family for technical artifacts, implementation explanations, command instructions, diffs, configuration, file structure, debugging, and API examples. The family should include plain code blocks, terminal commands, before/after code diffs, annotated code, file trees, config blocks, error/fix pairs, and API request/response variants.  
_Novelty_: The pattern makes technical implementation content readable inside visual artifacts without relying on markdown rendering.

**[Component Catalog #1]: Risk Callout**  
_Concept_: Risk should be a reusable callout component that can appear inside any pattern family rather than a standalone pattern family in v1. It highlights uncertainty, downside, migration concern, operational hazard, or review attention needed.  
_Novelty_: This keeps the main pattern catalog focused while still giving LLMs a consistent way to surface caution inside process, comparison, analysis, data, or code sections.
