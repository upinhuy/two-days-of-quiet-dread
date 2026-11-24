// Two Days of Quiet Dread — make.fun bounty entry.
//
// Writes one code review comment to /output/entry.txt: a single line of
// at most 140 characters that approves a pull request while carrying quiet
// existential dread. Deterministic, no dependencies, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "Approved. Legacy code by Friday, archaeology by next year, dust eventually — but it merges cleanly today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMENT, "utf8");
