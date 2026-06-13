# Infographic CSS Library SPEC

This document is the authoritative contract for the infographic CSS library.
It defines the allowed markup vocabulary, naming rules, pattern families, callouts,
and CSS architecture for v1.

## 1. Canonical Page Shell

Every infographic SHALL use the same shell structure.

- `<body class="ig-page">` is the document container
- `ig-header` appears before the main content
- `ig-main` contains exactly one active pattern family
- `ig-footer` is optional and appears after `ig-main`

The active family class SHALL be placed on `ig-main`, not on `<body>`.
Only one family class is permitted per page.

### Shell Element Inventory

| Element | Role | Variants |
| --- | --- | --- |
| `ig-page` | Page container on `<body>` | no variants |
| `ig-header` | Header container | no variants |
| `ig-header-title` | Required title | no variants |
| `ig-header-subtitle` | Optional subtitle | no variants |
| `ig-header-meta` | Optional metadata line | no variants |
| `ig-main` | Main content container | no variants |
| `ig-footer` | Optional footer container | no variants |

### Header Rules

- `ig-header-title` is required.
- `ig-header-subtitle` is optional.
- `ig-header-meta` is optional.
- No other dedicated header child classes are defined in v1.

### Footer Rules

- `ig-footer` is optional.
- No dedicated footer child classes are defined in v1.
- If a footer is needed, use plain semantic HTML inside `ig-footer`.

### Shell Acceptance Rules

- The page SHALL remain centered on wide viewports.
- The shell SHALL be readable and bounded by a max-width.
- The main family content SHALL live inside `ig-main`.

## 2. Naming Conventions

All library classes SHALL follow a fixed naming scheme.

### Naming Schema

`ig-{family}-{element}--{variant}`

### Naming Rules

- `ig-` is mandatory on every library class
- `{family}` SHALL be one of `process`, `comparison`, `structure`, `analysis`, `data`, or `code`
- `{element}` SHALL be the documented role name for that family
- `--{variant}` SHALL be applied to the same element as the base class
- Page shell and callout classes omit the family segment
- No class names outside this spec are valid in v1

### Variant Rules

- If an element lists variants, only those variants are valid
- If an element does not list variants, it has no variants
- If a requirement says a variant is required, exactly one modifier SHALL be present
- A variant SHALL NOT be applied to a parent or child element
- An element SHALL NOT carry more than one variant modifier

### Verbosity Rule

- Class names SHALL use full semantic words
- Abbreviations are forbidden unless the abbreviation is a standard term
- `col` is acceptable
- `hd` is not acceptable

### Naming Acceptance Rules

- The LLM SHALL NOT invent classes not listed in this spec
- The LLM SHALL NOT compress names into shorthand

## 3. Pattern Families

Exactly six families exist in v1.

### 3.1 Family Selection Guide

Use the following rules to select a family before writing markup.

#### `process`

- Use when the content is an ordered sequence of discrete steps
- Do not use for spatial hierarchy
- Do not use when the content is primarily about comparison or data

#### `comparison`

- Use when the content compares two or more options across shared traits
- Do not use for ordered sequences
- Do not use for tree structures or ratings

#### `structure`

- Use when the content is a spatial or organizational hierarchy with no inherent order
- Do not use for step-by-step flows
- Do not use when the content is primarily a rating, chart, or code block

#### `analysis`

- Use when the content applies qualitative judgment to items
- Do not use for raw numbers or numeric charts
- Do not use when the content is primarily procedural

#### `data`

- Use when the content is numerical and visual, such as bars, measures, percentages, or stat grids
- Do not use for qualitative judgment
- Do not use when the content is primarily explanatory text without numeric emphasis

#### `code`

- Use when the primary content is source code, configuration, or a diff with annotation
- Do not use when the main purpose is a process, comparison, structure, analysis, or data visualization

### 3.2 What If No Family Fits

If the content does not fit cleanly into any family, choose the closest family and add
an `ig-callout--note` explaining the mismatch. Do not invent a new family.

### 3.3 Family Inventory

#### Process

Use for ordered sequences of steps.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-process-steps` | Container for all steps | no variants |
| `ig-process-step` | One step in the sequence | `--active`, `--done`, `--skip` |
| `ig-process-step-number` | Ordinal marker | no variants |
| `ig-process-step-title` | Step heading | no variants |
| `ig-process-step-body` | Step description or content | no variants |

Rules:

- `ig-process-steps` is required
- `ig-process-step` is repeatable
- Each `ig-process-step` SHALL contain `ig-process-step-number` and `ig-process-step-title`
- `ig-process-step-body` is optional
- `ig-process-step` may be default or carry one of the listed variants

#### Comparison

Use for side-by-side options.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-comparison-grid` | Container for all columns | `--matrix` |
| `ig-comparison-col` | One option column | `--highlight`, `--muted` |
| `ig-comparison-col-head` | Column header / option name | no variants |
| `ig-comparison-row` | Trait row spanning all columns | no variants |
| `ig-comparison-trait` | Matrix row container | no variants |
| `ig-comparison-trait-label` | Matrix trait label | no variants |
| `ig-comparison-cell` | Matrix comparison cell | `--highlight` |

Rules:

- `ig-comparison-grid` is required
- `ig-comparison-col` is repeatable
- A comparison SHALL contain at least two columns
- `ig-comparison-col-head` is required inside each column
- `ig-comparison-row` is repeatable
- `ig-comparison-col` may be default or carry one of the listed variants
- `ig-comparison-grid--matrix` is optional and enables the trait-spans-columns layout
- In matrix mode, `ig-comparison-trait` is repeatable and `ig-comparison-trait-label` plus `ig-comparison-cell` elements are required inside each trait row
- In matrix mode, `ig-comparison-col-head` elements are direct children of `ig-comparison-grid--matrix`

#### Structure

Use for spatial hierarchy or organizational structure.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-structure-tree` | Container for the hierarchy | `--flat` |
| `ig-structure-node` | One node in the hierarchy | `--root`, `--leaf` |
| `ig-structure-node-label` | Node label text | no variants |
| `ig-structure-children` | Nested child wrapper | no variants |

Rules:

- `ig-structure-tree` is required
- `ig-structure-node` is repeatable
- Exactly one `ig-structure-node--root` SHALL exist
- `ig-structure-node--leaf` is optional and marks terminal nodes
- Connectors between nodes SHALL be rendered with CSS only
- No `ig-structure-edge` element exists
- In tree mode, child nodes SHALL be wrapped in `ig-structure-children`
- `ig-structure-tree--flat` preserves the pre-Phase-2 flat indentation mode with direct child nodes only

#### Analysis

Use for qualitative judgment.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-analysis-grid` | Container for all items | no variants |
| `ig-analysis-item` | One scored or rated item | `--positive`, `--negative`, `--neutral` |
| `ig-analysis-item-label` | Item name or attribute | no variants |
| `ig-analysis-item-value` | Judgment, score, or rating | no variants |

Rules:

- `ig-analysis-grid` is required
- `ig-analysis-item` is repeatable
- Each `ig-analysis-item` SHALL carry exactly one variant
- `ig-analysis-item-label` and `ig-analysis-item-value` are both required inside the item

#### Data

Use for numerical visual representation.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-data-chart` | Container for the visualization | `--bar`, `--stat`, `--donut` |
| `ig-data-bar` | One bar, row, or data cell | `--primary`, `--accent`, `--muted` |
| `ig-data-stat` | One stat metric card | no variants |
| `ig-data-donut` | One donut metric card | no variants |
| `ig-data-label` | Category or axis label | no variants |
| `ig-data-value` | Numeric value or display value | no variants |

Rules:

- `ig-data-chart` is required
- `ig-data-bar` is repeatable
- `ig-data-chart` SHALL carry exactly one variant modifier
- `ig-data-bar` is valid in `--bar` mode and is repeatable there
- `ig-data-stat` is valid in `--stat` mode and is repeatable there
- `ig-data-donut` is valid in `--donut` mode and is repeatable there
- `ig-data-label` and `ig-data-value` are both required inside each bar, stat, or donut item
- `ig-data-bar` may be default or carry one of the listed variants
- If no variant is present, `ig-data-bar` SHALL render like `--primary`
- In bar mode, `--ig-data-fill` SHALL be set as a percentage custom property on each `ig-data-bar` when a proportional fill is needed
- In donut mode, `ig-data-donut` SHALL contain inline SVG markup using `stroke-dasharray` on a `<circle>`

#### Normative Donut Example

```html
<article class="ig-data-donut">
  <svg viewBox="0 0 120 120" aria-hidden="true">
    <circle class="ig-data-donut-track" cx="60" cy="60" r="44" pathLength="100"></circle>
    <circle
      class="ig-data-donut-fill"
      cx="60"
      cy="60"
      r="44"
      pathLength="100"
      stroke-dasharray="72 100"
    ></circle>
  </svg>
  <span class="ig-data-label">Completion</span>
  <strong class="ig-data-value">72%</strong>
</article>
```

#### Code

Use for source code, configuration, or diffs with explanation.

| Element | Role | Variants |
| --- | --- | --- |
| `ig-code-block` | Container for one code presentation | `--diff`, `--highlight` |
| `ig-code-snippet` | The `<pre><code>` content | no variants |
| `ig-code-annotation` | Margin note explaining code | no variants |

Rules:

- `ig-code-block` is required
- `ig-code-snippet` is required and SHALL wrap exactly one `<pre><code>` element
- `ig-code-annotation` is optional
- `ig-code-annotation` SHALL be a sibling or associated element of `ig-code-snippet`, not nested inside it
- `ig-code-block` may be default or carry one of the listed variants

### 3.4 Family Disambiguation

When content could fit multiple families, use the following precedence rules.

1. Ordered steps with a defined sequence -> `process`
2. Spatial or organizational hierarchy -> `structure`
3. Qualitative judgment -> `analysis`
4. Numerical chart or measurement display -> `data`
5. Side-by-side options across shared traits -> `comparison`
6. Source code, config, or diff -> `code`

If the decision is still ambiguous, choose the closest family and explain the partial fit with an `ig-callout--note`.

## 4. Callout Component

`ig-callout` is a cross-family component. It does not use a family prefix.

### Callout Inventory

| Element | Role | Variants |
| --- | --- | --- |
| `ig-callout` | Reusable callout container | `--risk`, `--note`, `--tip`, `--key`, `--warning` |
| `ig-callout-icon` | Optional icon | no variants |
| `ig-callout-body` | Required callout content | no variants |

### Callout Rules

- `ig-callout` MAY appear inside any family container
- `ig-callout` SHALL always carry exactly one variant modifier
- No default callout is valid in v1
- `ig-callout-body` is required
- `ig-callout-icon` is optional
- No other direct children are defined in v1

### Callout Variant Meanings

- `--risk` - something could go wrong; use for warnings about approach or outcome
- `--note` - additional context the reader should know
- `--tip` - helpful guidance or best practice
- `--key` - an important takeaway or critical point
- `--warning` - stronger than risk; use for must-not-miss cautions

## 5. CSS Architecture

The CSS architecture is fixed for v1.

### 5.1 Two-Layer Custom Properties

Layer 1 is the palette on `:root`. Layer 2 is the semantic token layer used by all component rules.

#### Layer 1: Palette

```css
--ig-color-blue:    #3B82F6;
--ig-color-slate:   #1E293B;
--ig-color-navy:    #0F172A;
--ig-color-white:   #FFFFFF;
--ig-color-gray:    #F8FAFC;
--ig-color-border:  #E2E8F0;
--ig-color-muted:   #64748B;
--ig-color-done:    #22C55E;
--ig-color-current: #EAB308;
--ig-color-locked:  #94A3B8;
```

#### Layer 2: Semantic Tokens

```css
--ig-accent:      var(--ig-color-blue);
--ig-text:        var(--ig-color-slate);
--ig-text-muted:  var(--ig-color-muted);
--ig-surface:     var(--ig-color-white);
--ig-surface-alt: var(--ig-color-gray);
--ig-border:      var(--ig-color-border);
--ig-radius:      8px;
--ig-space-xs:    0.5rem;
--ig-space-sm:    1rem;
--ig-space-md:    1.5rem;
--ig-space-lg:    2.5rem;
```

### 5.2 Token Usage Rule

- Component rules SHALL reference semantic tokens only
- Component rules SHALL NOT reference palette vars directly

### 5.3 Scoped Reset

The reset is scoped to `.ig-page` only.

```css
.ig-page,
.ig-page * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

- No global reset is allowed
- The reset SHALL not affect elements outside `.ig-page`

### 5.4 Dependency Rules

- The library SHALL have zero JavaScript and zero external resources; in this spec, "CSS-only" means exactly that
- No `@import url(...)` font loads are allowed
- No CDN-hosted assets are allowed
- No image file references are allowed
- Inline SVG markup inside the HTML document is allowed
- The system font stack SHALL be `system-ui, -apple-system, sans-serif`

### 5.5 Distribution Contract

- The library SHALL be distributable as a single `infographic.css` file
- The same file MAY be linked with `<link rel="stylesheet" href="infographic.css">`
- The same file MAY be copied verbatim into a `<style>` block
- Both delivery modes SHALL render identically
- No build step is required for v1

### 5.6 Browser Target

- The library SHALL target modern evergreen browsers
- Internet Explorer is out of scope
- CSS Grid, CSS custom properties, CSS nesting, `:has()`, and `clamp()` MAY be used

### 5.7 JavaScript Rule

- The library SHALL have zero JavaScript dependency
- No JS event handlers are defined or required
- State variants are static HTML classes, not runtime toggles

## 6. How To Use This Library

An LLM SHALL follow these steps in order.

1. Pick exactly one family based on the content type
2. Write the page shell with `ig-page`, `ig-header`, `ig-main`, and optional `ig-footer`
3. Put exactly one family class on `ig-main`
4. Write only the documented family elements and their allowed variants
5. Add `ig-callout` only when an explanation, warning, or mismatch note is needed

### 6.1 Minimal Authoring Rules

- Do not mix families on the same page
- Do not invent extra elements
- Do not invent extra variants
- Use the simplest valid markup that fits the content

### 6.2 Readability Rule

If the markup would need interpretation to be understood, the spec is incomplete or the family was chosen incorrectly. Choose the closest valid family and add a note callout.

## 7. Validation Checklist

The following checks SHALL pass for the spec to be considered complete.

- Every element listed in this document has either a variant list or an explicit `no variants` rule
- No element name uses a forbidden abbreviation
- The callout section lists all five variants with their intent descriptions
- The CSS variable section includes all ten palette vars and all semantic tokens
- A valid process infographic can be authored using only this spec
- A valid data infographic can be authored using only this spec
- A valid structure infographic can be authored using only this spec
- A valid comparison infographic can be authored using only this spec
