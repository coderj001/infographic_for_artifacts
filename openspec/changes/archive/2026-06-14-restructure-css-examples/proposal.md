## Why

The repo already has three distinct layers, but they are not named or grouped in a way that makes the contract obvious: the skills/specs define the rules, `infographic.css` implements them, and `examples/` demonstrates them. The current flat example layout hides that separation and makes the repository look like a set of peer assets instead of a contract, implementation, and proof set.

This change makes that boundary explicit so the next engineer can navigate the project without guessing which files are authoritative.

## What Changes

- Introduce a repository-structure spec that defines the hierarchy between the skill/spec contract, the CSS implementation, and the example fixtures.
- Reorganize the example pages into explicit groups instead of one flat directory listing.
- Keep `infographic.css` as the implementation artifact, not the contract source.
- Update the examples index so it describes the pages as conformance fixtures, not just demos.
- **BREAKING** Example file paths may change as pages move into subdirectories.

## Capabilities

### New Capabilities

- `repo-structure`: Repository layout contract that makes the skill/spec layer, CSS implementation layer, and example fixture layer explicit.

### Modified Capabilities

*(none)*

## Impact

- Affects the `examples/` directory layout and the example index/README.
- Adds a new spec under `openspec/changes/restructure-css-examples/specs/` to document the repository organization contract.
- Does not change the rendering behavior of `infographic.css`.
