# infographic-css

One-command installer for the `infographic-css` Codex skill.

## Install

From a GitHub repository:

```bash
npx github:<user>/<repo> add .
```

If you have the repo locally:

```bash
npx infographic-css add
```

## What it installs

The `add` command copies:

- `skills/infographic-css/SKILL.md`

into:

- `./.codex/skills/infographic-css/SKILL.md`

## Package entrypoint

The package exposes a single CLI:

- `infographic-css add [target-dir]`

The target defaults to the current directory.
