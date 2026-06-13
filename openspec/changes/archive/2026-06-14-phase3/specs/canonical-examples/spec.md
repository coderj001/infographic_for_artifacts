## ADDED Requirements

### Requirement: Canonical fixture set
The system SHALL provide a canonical HTML fixture set for the page shell, each of the six pattern families, and the reusable callout component.

#### Scenario: Fixture inventory is complete
- **WHEN** the examples directory is inspected
- **THEN** the canonical fixture set includes a shell page, six family pages, and a callout example

### Requirement: Standalone document contract
Each canonical fixture SHALL be a complete HTML document that can be opened directly without build tooling or JavaScript.

#### Scenario: Fixture opens as a standalone page
- **WHEN** a fixture is opened in a browser
- **THEN** the document renders using only its HTML and the shared stylesheet reference

### Requirement: Shared stylesheet linkage
Each canonical fixture SHALL reference the shared `infographic.css` stylesheet with a relative path that works from its location in the examples tree.

#### Scenario: Styling is shared across fixtures
- **WHEN** the fixture set is loaded from the examples directory
- **THEN** every page uses the same shared CSS contract rather than inlining a separate stylesheet

### Requirement: Canonical class usage
Each canonical fixture SHALL use only approved infographic classes for the contract surface it demonstrates.

#### Scenario: Example markup matches the documented pattern
- **WHEN** a fixture is read as a template
- **THEN** its class names map cleanly to the intended shell, family, or callout pattern without undocumented classes or JavaScript hooks

### Requirement: Copy-ready examples
Each canonical fixture SHALL contain enough representative structure and content to be reused directly as a template for new infographic pages.

#### Scenario: Example can be reused without reading implementation code
- **WHEN** an LLM or author copies a fixture as a starting point
- **THEN** the page still shows the intended shell, family, or callout pattern with clear, complete markup

### Requirement: Callout coverage
The canonical fixture set SHALL demonstrate the reusable callout component, including a risk callout variant.

#### Scenario: Callout styling is visible in the fixture set
- **WHEN** the callout example is opened
- **THEN** it shows the expected callout structure and at least one risk-oriented callout state
