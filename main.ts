import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two Days of Quiet Dread — one-line code review that approves the PR
// with quiet existential dread. The review is a single line, at most
// 140 characters, and it must read like a tired engineer clicking approve.
const entry =
  "LGTM. The diff is clean, the tests are green, and in the end the repo will forget us both.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Validation read-back: the gate requires UTF-8 text of 1 to 140
// characters, a single line, not only whitespace.
const back = readFileSync(join(outDir, "entry.txt"), "utf8");
if (back !== entry) throw new Error("read-back mismatch");
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry length ${entry.length} outside 1..140`);
}
if (entry.includes("\n")) throw new Error("entry must be a single line");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
