## ADDED Requirements

### Requirement: ig-comparison-grid--matrix enables the trait-spans-columns layout
`ig-comparison-grid--matrix` is a variant of `ig-comparison-grid` that renders a structured attribute comparison where trait labels span all option columns. The LLM SHALL set `style="--ig-col-count: N"` on the grid element, where N equals the number of option columns being compared.

#### Scenario: Matrix mode with two columns
- **WHEN** `ig-comparison-grid--matrix` has `style="--ig-col-count: 2"` and two `ig-comparison-col-head` children
- **THEN** the grid SHALL render with a label column on the left and two equal option columns to the right

#### Scenario: Matrix mode with three columns
- **WHEN** `ig-comparison-grid--matrix` has `style="--ig-col-count: 3"` and three `ig-comparison-col-head` children
- **THEN** the grid SHALL render with a label column on the left and three equal option columns to the right

#### Scenario: --ig-col-count must match col-head count
- **WHEN** `--ig-col-count` does not equal the number of `ig-comparison-col-head` elements present
- **THEN** the output is considered invalid; the LLM SHALL ensure the count matches

---

### Requirement: ig-comparison-col-head placement in matrix mode
In `--matrix` mode, `ig-comparison-col-head` elements are direct children of `ig-comparison-grid--matrix`, not wrapped in a column container. They appear as the first row of the grid, occupying the option column positions. The label column position is left empty in the header row.

#### Scenario: Headers render as the top row
- **WHEN** `ig-comparison-grid--matrix` contains multiple `ig-comparison-col-head` elements as direct children before any `ig-comparison-trait` elements
- **THEN** they SHALL appear in the top row of the grid, one per option column, with the leftmost label column cell empty

---

### Requirement: ig-comparison-trait is the row-spanning trait element
`ig-comparison-trait` is the element that represents one attribute row in a matrix comparison. It SHALL be a direct child of `ig-comparison-grid--matrix`. It SHALL contain exactly one `ig-comparison-trait-label` and one `ig-comparison-cell` per option column.

#### Scenario: Trait row with label and two cells
- **WHEN** `ig-comparison-trait` contains one `ig-comparison-trait-label` and two `ig-comparison-cell` elements
- **THEN** the label SHALL render in the leftmost column and the two cells SHALL render in their respective option columns, all visually aligned as one row

#### Scenario: Trait label is required
- **WHEN** `ig-comparison-trait` is written without an `ig-comparison-trait-label`
- **THEN** the output is invalid; `ig-comparison-trait-label` is required inside every `ig-comparison-trait`

---

### Requirement: ig-comparison-cell is the value element inside a trait row
`ig-comparison-cell` is the element that holds the value for one option within a trait row. It SHALL appear inside `ig-comparison-trait`, one per option column. It MAY carry the `--highlight` variant to visually emphasize a preferred or recommended value.

#### Scenario: Cell without variant
- **WHEN** `ig-comparison-cell` carries no variant
- **THEN** it SHALL render with the default surface and text styles

#### Scenario: Cell with --highlight variant
- **WHEN** `ig-comparison-cell` carries `ig-comparison-cell--highlight`
- **THEN** it SHALL render with a visually distinguished background or border that signals the preferred option in that row

---

### Requirement: Default comparison mode (column-owns-rows) is unchanged
The existing `ig-comparison-grid` without any variant retains its Phase 1 behavior. `ig-comparison-col`, `ig-comparison-col-head`, and `ig-comparison-row` remain valid and unchanged in the default mode.

#### Scenario: Existing default markup renders as before
- **WHEN** an `ig-comparison-grid` (no variant) contains `ig-comparison-col` elements with nested `ig-comparison-row` elements
- **THEN** it SHALL render identically to the Phase 1 output with no visual change

#### Scenario: Matrix elements invalid in default mode
- **WHEN** `ig-comparison-grid` (no variant) contains `ig-comparison-trait` or `ig-comparison-cell` elements
- **THEN** the output is considered invalid; those elements are only valid inside `ig-comparison-grid--matrix`
