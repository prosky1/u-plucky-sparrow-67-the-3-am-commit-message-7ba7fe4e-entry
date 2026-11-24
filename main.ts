// The 3 AM Commit Message — entry for make.fun bounty
// u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes one commit message (<=200 chars) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const message =
  "fix: production is down because I deployed on a Friday at 3 AM and the tests were only a suggestion";

// Guard: the bounty requires 1-200 characters of non-whitespace UTF-8 text.
if (message.length < 1 || message.length > 200) {
  throw new Error(`commit message must be 1-200 characters, got ${message.length}`);
}
if (message.trim().length === 0) {
  throw new Error("commit message must not be only whitespace");
}
if (!message.startsWith("fix: ")) {
  throw new Error("commit message must read like a real commit message");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", message, "utf8");

// Verify byte-exact: what the grader reads must be exactly the message,
// with no trailing newline or stray bytes added by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== message) {
  throw new Error(
    `wrote ${written.length} chars to /output/entry.txt, expected exactly ${message.length}`,
  );
}
console.log(message);
