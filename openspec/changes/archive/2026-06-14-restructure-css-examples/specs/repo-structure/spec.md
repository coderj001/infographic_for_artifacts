## ADDED Requirements

### Requirement: Repository layers are explicit
The repository SHALL make the contract layer, implementation layer, and example fixture layer distinct in documentation and file organization. The skill/spec documents SHALL be treated as the contract authority, `infographic.css` SHALL be treated as the implementation, and `examples/` SHALL be treated as conformance fixtures.

#### Scenario: Contributor reads the repo root
- **WHEN** a contributor opens the repository and inspects the top-level structure
- **THEN** they can tell which artifacts define the contract, which artifact implements it, and which artifacts demonstrate it

### Requirement: Example fixtures are grouped by purpose
The `examples/` directory SHALL separate the canonical shell fixture from the family fixtures. Each family fixture SHALL remain a standalone HTML file that exercises exactly one pattern family.

#### Scenario: Shell fixture is isolated
- **WHEN** a contributor looks for the canonical shell page
- **THEN** they find a dedicated shell fixture rather than a mixed example page

#### Scenario: Family fixtures stay one-per-family
- **WHEN** a contributor opens a family fixture
- **THEN** the page demonstrates only one pattern family and does not combine multiple families on the same page

### Requirement: Example fixtures use the shared stylesheet
Each example fixture SHALL load the shared `infographic.css` stylesheet from the repository root or a clearly defined shared relative path. Example pages SHALL NOT inline duplicate stylesheet content.

#### Scenario: Shared CSS is referenced once
- **WHEN** any example fixture is opened
- **THEN** it renders using the shared stylesheet rather than a copied stylesheet block

### Requirement: Example index explains fixture roles
The examples index document SHALL explain that the example pages are fixtures used to validate the contract and implementation boundary.

#### Scenario: Fixture index is readable
- **WHEN** a contributor reads `examples/README.md`
- **THEN** they understand which pages are shell validation, which are family fixtures, and what role the examples serve in the repo
