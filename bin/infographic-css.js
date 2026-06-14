#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.log("Usage: infographic-css add [target-dir]");
  console.log("Installs .codex/skills/infographic-css/SKILL.md into the target directory.");
}

function getExitCode(command) {
  if (command === "--help") return 0;
  if (command === "-h") return 0;
  return 1;
}

function getTargetDir(arg) {
  return arg || ".";
}

function main(argv) {
  const command = argv[2];
  if (command !== "add") {
    usage();
    process.exit(getExitCode(command));
  }

  const targetRoot = path.resolve(process.cwd(), getTargetDir(argv[3]));
  const source = path.join(__dirname, "..", "skills", "infographic-css", "SKILL.md");
  const destinationDir = path.join(targetRoot, ".codex", "skills", "infographic-css");
  const destination = path.join(destinationDir, "SKILL.md");

  fs.mkdirSync(destinationDir, { recursive: true });
  fs.copyFileSync(source, destination);
  console.log(`Installed infographic-css skill to ${path.relative(process.cwd(), destination)}`);
}

main(process.argv);
