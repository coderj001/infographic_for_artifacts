## ADDED Requirements

### Requirement: Six pattern families are the complete set
The library SHALL define exactly six pattern families for v1: `process`, `comparison`,
`structure`, `analysis`, `data`, and `code`. No other families exist in v1.
New families are v2+ scope.

#### Scenario: LLM cannot map content to a family
- **WHEN** content does not fit cleanly into any of the six families
- **THEN** the LLM SHALL choose the closest family and place an `ig-callout--note` explaining the partial fit

### Requirement: Family is declared once on ig-main
The active pattern family SHALL be declared as a single class on the `ig-main` element.
`<body>` SHALL NOT carry the family class. Only one family class is permitted per page.

#### Scenario: Correct family declaration
- **WHEN** rendering a process infographic
- **THEN** the markup SHALL be `<main class="ig-main ig-process">` with no family class on `<body>`

#### Scenario: No mixed families
- **WHEN** an infographic is rendered
- **THEN** `ig-main` SHALL carry exactly one family class

### Requirement: Process family — ordered sequential steps
The `ig-process` family SHALL be used when content describes a sequence of discrete
steps with a defined order. It SHALL NOT be used for spatial hierarchies.

Elements:
- `ig-process-steps` — container for all steps (required)
- `ig-process-step` — one step in the sequence (required, repeatable)
- `ig-process-step-number` — the ordinal marker, e.g. `01` (required inside step)
- `ig-process-step-title` — step heading (required inside step)
- `ig-process-step-body` — step description or content (optional)

Variants on `ig-process-step`:
- `--active` — the current or highlighted step
- `--done` — a completed step
- `--skip` — a skipped or optional step

#### Scenario: Minimal process step
- **WHEN** a process infographic is rendered
- **THEN** each `ig-process-step` SHALL contain at minimum `ig-process-step-number` and `ig-process-step-title`

#### Scenario: Step state variants
- **WHEN** a step is marked `--done`
- **THEN** it SHALL receive a visual treatment distinct from the default and `--active` states

### Requirement: Comparison family — side-by-side options
The `ig-comparison` family SHALL be used when content presents two or more discrete
options across shared traits. It SHALL NOT be used for ordered sequences.

Elements:
- `ig-comparison-grid` — container for all columns (required)
- `ig-comparison-col` — one option column (required, repeatable)
- `ig-comparison-col-head` — column header / option name (required inside col)
- `ig-comparison-row` — a trait row spanning all columns (required, repeatable)

Variants on `ig-comparison-col`:
- `--highlight` — the recommended or preferred option
- `--muted` — a de-emphasized option

#### Scenario: Minimum two columns
- **WHEN** a comparison infographic is rendered
- **THEN** `ig-comparison-grid` SHALL contain at least two `ig-comparison-col` elements

#### Scenario: Highlight variant
- **WHEN** one column carries `--highlight`
- **THEN** it SHALL be visually distinguished from the default columns

### Requirement: Structure family — spatial hierarchy
The `ig-structure` family SHALL be used when content represents a spatial hierarchy
or relationship with no inherent order. It SHALL NOT be used for sequential steps.

Elements:
- `ig-structure-tree` — container for the hierarchy (required)
- `ig-structure-node` — one node in the hierarchy (required, repeatable)
- `ig-structure-node-label` — the node's text label (required inside node)

Connectors between nodes SHALL be rendered via CSS only. No `ig-structure-edge` element exists.

Variants on `ig-structure-node`:
- `--root` — the top-level node
- `--leaf` — a terminal node with no children

#### Scenario: Root node
- **WHEN** a structure infographic is rendered
- **THEN** exactly one `ig-structure-node--root` SHALL exist

#### Scenario: CSS-only connectors
- **WHEN** the structure tree is rendered
- **THEN** no edge or connector element SHALL appear in the markup — connections are CSS-rendered

### Requirement: Analysis family — qualitative judgement
The `ig-analysis` family SHALL be used when content scores, rates, or applies
qualitative judgement to a set of items. It SHALL NOT be used for quantitative
numerical data.

Elements:
- `ig-analysis-grid` — container for all items (required)
- `ig-analysis-item` — one scored or rated item (required, repeatable)
- `ig-analysis-item-label` — the item name or attribute (required inside item)
- `ig-analysis-item-value` — the judgement, score, or rating (required inside item)

Variants on `ig-analysis-item`:
- `--positive` — favourable judgement
- `--negative` — unfavourable judgement
- `--neutral` — neither positive nor negative

#### Scenario: Variant required
- **WHEN** an `ig-analysis-item` is rendered
- **THEN** it SHALL carry exactly one of `--positive`, `--negative`, or `--neutral`

### Requirement: Data family — quantitative visual representation
The `ig-data` family SHALL be used when content represents numerical quantities
visually — bar charts, stat grids, comparison tables with percentages or measurements.
It SHALL NOT be used for qualitative judgement.

Elements:
- `ig-data-chart` — container for the data visualization (required)
- `ig-data-bar` — one bar, row, or data cell (required, repeatable)
- `ig-data-label` — the category or axis label (required inside bar)
- `ig-data-value` — the numeric value or display value (required inside bar)

Variants on `ig-data-bar`:
- `--primary` — the default bar color
- `--accent` — a highlighted or featured bar
- `--muted` — a de-emphasized bar

#### Scenario: Default bar variant
- **WHEN** no variant is specified on `ig-data-bar`
- **THEN** it SHALL render identically to `--primary`

#### Scenario: Accent bar distinction
- **WHEN** a bar carries `--accent`
- **THEN** it SHALL be visually distinct from `--primary` bars

### Requirement: Code family — annotated code presentation
The `ig-code` family SHALL be used when the primary content is source code,
configuration, or a diff with explanatory annotations.

Elements:
- `ig-code-block` — container for one code presentation (required)
- `ig-code-snippet` — the `<pre><code>` code content (required inside block)
- `ig-code-annotation` — a margin note explaining part of the code (optional)

Variants on `ig-code-block`:
- `--diff` — the code is a diff with additions and removals
- `--highlight` — emphasis on a specific code section

#### Scenario: Code snippet required
- **WHEN** an `ig-code-block` is rendered
- **THEN** it SHALL contain exactly one `ig-code-snippet` wrapping a `<pre><code>` element

#### Scenario: Annotation placement
- **WHEN** an `ig-code-annotation` is present
- **THEN** it SHALL be a sibling or associated element of `ig-code-snippet`, not nested inside it
