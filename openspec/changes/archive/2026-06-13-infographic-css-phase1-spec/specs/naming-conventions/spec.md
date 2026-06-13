## ADDED Requirements

### Requirement: Class naming follows a fixed schema
All library classes SHALL follow the schema: `ig-{family}-{element}--{variant}`.

Rules:
- `ig-` prefix is mandatory on every class in the library
- `{family}` is one of: `process`, `comparison`, `structure`, `analysis`, `data`, `code`
- `{element}` is the component role, defined per-family in the pattern families spec
- `--{variant}` is a modifier applied to the same element; variant list is exhaustive per element
- Page shell and callout classes omit the `{family}` segment: `ig-page`, `ig-header`, `ig-callout`
- An LLM SHALL NOT invent class names not defined in this spec

#### Scenario: LLM uses unlisted class
- **WHEN** an LLM produces a class name not listed in the spec
- **THEN** it is a spec violation — the markup is invalid

### Requirement: Variant application is on the same element
A variant SHALL be applied as a second class on the same element as the base class.
It SHALL NOT be applied to a child or parent element.

#### Scenario: Correct variant application
- **WHEN** a process step is active
- **THEN** the markup SHALL be `<div class="ig-process-step ig-process-step--active">`, not a separate child element

### Requirement: Variant lists are exhaustive and closed
Each element's variant list is defined in the spec and is the complete set.
No unlisted variants are valid. The spec is the authoritative source of truth.

#### Scenario: Attempted custom variant
- **WHEN** an LLM needs a visual treatment not covered by existing variants
- **THEN** it SHALL use the closest defined variant or place an `ig-callout--note` explaining the gap — it SHALL NOT invent a new variant class

### Requirement: Names are verbose and semantic
Class names SHALL use full words, not abbreviations.

- `ig-process-step-title` not `ig-proc-step-ttl`
- `ig-comparison-col-head` not `ig-comp-col-hd`

#### Scenario: Abbreviation check
- **WHEN** a new element name is proposed during Phase 2
- **THEN** it SHALL use unabbreviated English words unless the abbreviated form is itself a standard term (e.g., `col` for column is acceptable)
