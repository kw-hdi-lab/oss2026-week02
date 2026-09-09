// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// 20 random integers 0-100
//   -> keep odd numbers only
//   -> double each
//   -> sort descending
//   -> keep the first half
// Print the array after EVERY step.
//
// Remember: sort() needs a compare function for numbers: (a, b) => b - a
// Remember: sort() is destructive; the others (filter, map, slice) are not.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// TODO: odd only
// TODO: doubled
// TODO: descending
// TODO: first half
