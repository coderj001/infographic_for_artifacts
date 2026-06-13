# Conventions

## Theme

- One default visual theme only.
- Use internal CSS variables so future theming is possible without changing the HTML contract.
- Keep the visual style consistent across all pattern families.

## Naming

- Pattern families use the `ig-{family}-pattern` wrapper class.
- Variant classes use `ig-{family}-variant-{name}`.
- Element roles use verbose semantic names, such as `ig-process-step-title` or `ig-code-panel-title`.
- Do not shorten role names to generic classes like `title`, `panel`, or `box`.

## Structure

- Each pattern has a canonical wrapper and a bounded child structure.
- Variants must preserve the same required child roles.
- If a pattern needs a different structure, it is a different pattern family.

## Skill Contract

- The companion skill reads the library docs and examples.
- The skill explains the available patterns to the LLM.
- The skill does not choose patterns on behalf of the LLM.
- The skill does not become a conversion engine or layout planner.

## Rendering

- The library must work in a single HTML file with an embedded `<style>` block.
- The same CSS should also work as a standalone `infographic.css` file.
- Pattern blocks should degrade cleanly when a specific variant is omitted.

## Content Fit

- Process patterns explain sequences.
- Comparison patterns explain tradeoffs.
- Structure patterns explain composition and hierarchy.
- Analysis patterns explain causality, dependency, and decision structure.
- Data patterns explain simple quantities and status.
- Code patterns explain implementation detail.
- Risk callouts surface caution inside any family.
