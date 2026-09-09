// P5. Korean-typo fixer CLI  (commit: "p5: inko cli")
//
// "dhvms thtm" was typed with the keyboard in English mode.
// Turn it back into "오픈 소스" using the inko package.
//
//   1. npm install inko
//   2. import Inko from "inko";   (add it at the top of this file)
//   3. const inko = new Inko();  inko.en2ko("dhvms thtm")  ->  "오픈 소스"
//
// Usage:
//   node main.js            en -> ko
//   node main.js --reverse  ko -> en   (inko.ko2en)
//
// Then check three things:
//   package.json has "inko" under dependencies
//   node_modules/inko exists
//   git status does NOT show node_modules

import readline from "node:readline";

// TODO: import Inko and create an instance.

const reverse = process.argv.includes("--reverse");
const lines = [];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log(reverse ? "Type lines in Korean (ko -> en)." : "Type lines in English keys (en -> ko).");
console.log('Type "q" to finish.');

rl.on("line", (line) => {
  if (line.trim() === "q") {
    rl.close();
    return;
  }
  lines.push(line);
});

rl.on("close", () => {
  // TODO: filter out empty lines
  //       -> map each line through inko (en2ko, or ko2en when --reverse)
  //       -> print numbered:  "1. 오픈 소스"
});
