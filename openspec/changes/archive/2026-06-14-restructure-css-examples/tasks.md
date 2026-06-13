## 1. Reorganize Example Fixtures

- [x] 1.1 Move the canonical shell example into a dedicated shell fixture location
- [x] 1.2 Move the six family example pages into a dedicated family fixture location
- [x] 1.3 Update each moved example so its stylesheet path still resolves to the shared `infographic.css`

## 2. Update Example Indexing

- [x] 2.1 Rewrite `examples/README.md` to describe the contract, implementation, and fixture layers
- [x] 2.2 List the shell fixture separately from the family fixtures
- [x] 2.3 Remove wording that presents the examples as a flat demo list

## 3. Verify the Restructure

- [x] 3.1 Open the shell fixture and confirm the layout matches the current baseline
- [x] 3.2 Open each family fixture and confirm the rendered output is unchanged apart from the new file location
- [x] 3.3 Confirm `infographic.css` does not need behavioral changes for the new structure
