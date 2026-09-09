// P6. Word frequency + your own module  (commit: "p6: word frequency")
//
// node p6_wordfreq.js sample.txt
//
// expected:
//   48 words, 17 distinct
//   code     9
//   the      7
//   ship     5
//   it       5
//   you      3
//
// The helpers live in utils.js. Import them with a relative path:
// both "./" and ".js" are required in ESM.

import fs from "node:fs";
// TODO: import { tokenize, countWords, topN } from "./utils.js";

const path = process.argv[2] ?? "sample.txt";
const text = fs.readFileSync(path, "utf8");

// TODO: words = tokenize(text)
// TODO: counts = countWords(words)
// TODO: print "<total> words, <distinct> distinct"
// TODO: for each [word, count] of topN(counts, 5): print word padded to 8 chars, then count
//       Hint: word.padEnd(8)
