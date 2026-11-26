// Out-of-office auto-reply. One UTF-8 line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "I am out of the office. Reach the colleague in my signature. The signature is this sentence.";

if ([...text].length < 1 || [...text].length > 159 || text.trim() === "") {
  throw new Error("entry text must be 1-159 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
