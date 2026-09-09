// utils.js — helpers for P6. Export each one; import them from p6_wordfreq.js.

// tokenize("Ship it, ship it!") -> ["ship", "it", "ship", "it"]
// lowercase, replace anything that is not a-z or whitespace with a space, split, drop empty strings
export function tokenize(text) {
  // TODO
}

// countWords(["ship", "it", "ship"]) -> { ship: 2, it: 1 }
export function countWords(words) {
  // TODO (forEach + empty object, same pattern as P4 (b))
}

// topN({ ship: 2, it: 1, code: 9 }, 2) -> [["code", 9], ["ship", 2]]
// Hint: Object.entries(counts) -> [[word, count], ...] -> sort by count desc -> slice
export function topN(counts, n) {
  // TODO
}
