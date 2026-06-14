#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.log("Usage: infographic-css add [target-dir]");
  console.log("Installs .codex/skills/artifacts-to-html/SKILL.md and its bundled references/infographic.css into the target directory.");
}

function getExitCode(command) {
  if (command === "--help") return 0;
  if (command === "-h") return 0;
  return 1;
}

function getTargetDir(arg) {
  return arg || ".";
}

function copyTree(sourceDir, destinationDir) {
  fs.mkdirSync(destinationDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);
    if (entry.isDirectory()) {
      copyTree(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

function main(argv) {
  const command = argv[2];
  if (command !== "add") {
    usage();
    process.exit(getExitCode(command));
  }

  const targetRoot = path.resolve(process.cwd(), getTargetDir(argv[3]));
  const skillSource = path.join(__dirname, "..", "skills", "artifacts-to-html", "SKILL.md");
  const stylesheetSource = path.join(__dirname, "..", "skills", "artifacts-to-html", "infographic-css", "infographic.css");
  const referencesSourceDir = path.join(__dirname, "..", "skills", "artifacts-to-html", "references");
  const skillDestinationDir = path.join(targetRoot, ".codex", "skills", "artifacts-to-html");
  const stylesheetDestinationDir = path.join(skillDestinationDir, "references");
  const skillDestination = path.join(skillDestinationDir, "SKILL.md");
  const stylesheetDestination = path.join(stylesheetDestinationDir, "infographic.css");

  fs.mkdirSync(stylesheetDestinationDir, { recursive: true });
  fs.copyFileSync(skillSource, skillDestination);
  fs.copyFileSync(stylesheetSource, stylesheetDestination);
  copyTree(referencesSourceDir, path.join(skillDestinationDir, "references"));
  console.log(`Installed artifacts-to-html skill to ${path.relative(process.cwd(), skillDestination)}`);
  console.log(`Installed infographic.css to ${path.relative(process.cwd(), stylesheetDestination)}`);
  console.log(`Installed reference docs to ${path.relative(process.cwd(), path.join(skillDestinationDir, "references"))}`);
}

main(process.argv);
