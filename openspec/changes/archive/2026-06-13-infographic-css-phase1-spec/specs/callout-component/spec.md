## ADDED Requirements

### Requirement: Callout component is cross-family
The `ig-callout` component SHALL be usable inside any pattern family container
without family-scoped prefixing. The class name SHALL always be `ig-callout`
regardless of which family it appears in.

#### Scenario: Callout inside process
- **WHEN** an `ig-callout` appears inside `ig-process`
- **THEN** the callout SHALL render correctly without requiring a family-scoped class

#### Scenario: Callout inside code
- **WHEN** an `ig-callout` appears inside `ig-code`
- **THEN** the same `ig-callout` CSS rules SHALL apply without modification

### Requirement: Callout has five bounded variants
The `ig-callout` component SHALL support exactly five variants. No other variants
are valid in v1. Variants are applied as modifier classes on the same element:
`<div class="ig-callout ig-callout--risk">`.

Variants:
- `--risk` — something could go wrong; use for warnings about approach or outcome
- `--note` — additional context the reader should know
- `--tip` — helpful guidance or best practice
- `--key` — an important takeaway or critical point
- `--warning` — stronger than risk; use for must-not-miss cautions

#### Scenario: Single variant per callout
- **WHEN** an `ig-callout` is rendered
- **THEN** it SHALL carry exactly one variant modifier class

#### Scenario: Default callout invalid
- **WHEN** `ig-callout` is used with no variant modifier
- **THEN** it is a spec violation — a variant is always required

### Requirement: Callout structure is fixed
The `ig-callout` element SHALL contain an optional icon element and a content
element. No other direct children are defined in v1.

Structure:
```html
<div class="ig-callout ig-callout--risk">
  <span class="ig-callout-icon">⚠️</span>
  <div class="ig-callout-body">…</div>
</div>
```

#### Scenario: Body required
- **WHEN** an `ig-callout` is rendered
- **THEN** it SHALL contain `ig-callout-body`

#### Scenario: Icon optional
- **WHEN** no icon is needed
- **THEN** `ig-callout-icon` MAY be omitted
