# oss-week02 — Node, JavaScript, npm

Week 2 hands-on for *Open Source Software Design and Lab* (Kwangwoon Univ., 2026).

Replace this first line with your name and student ID, commit, push. That is P0.

## Rules

- Ask AI anything: concepts, error messages, docs. **Do not paste generated code.** Type every line yourself.
- Inline completions off (`Ctrl+Shift+P` → *GitHub Copilot: Disable Completions*).
- One problem, one file, one commit. Use the commit message given for each problem.
- Stuck for 15 minutes? Raise a hand.
- **Push by 11:45.** No push, no attendance.

## P0. Project setup (8 min) — `chore: init project`

1. This repo is a template. Click **Use this template → Create a new repository**. Name it `oss-week02`, **Public**.
2. `git clone <your-url>` → `cd oss-week02` → `code .`
3. Open `package.json`. `"type": "module"` is already there. Do not add anything else yet.
4. Edit the first line of this README with your name and student ID.
5. `git add -A` → `git commit -m "chore: init project"` → `git push`

Check: `git status` says *nothing to commit, working tree clean*. `node_modules` must never appear here.

## P1. Predict the output (8 min) — `p1: equality predictions`

`p1_predict.js` has 15 lines of `==`, `===`, `typeof`, and `"4" - true`.
Write your prediction in the comment **before** running. Then `node p1_predict.js`.
For every miss, add one line explaining why. Wrong predictions are the point. Commit them.

## P2. Diamond (8 min) — `p2: diamond`

`node p2_diamond.js 5` prints a 5-wide diamond of `*`. `n` comes from `process.argv[2]`, default 5.

```
  *
 ***
*****
 ***
  *
```

## P3. Scores pipeline (8 min) — `p3: scores pipeline`

20 random integers 0–100 → odd only → doubled → descending → first half. Print after every step.
`sort()` needs a compare function for numbers: `(a, b) => b - a`.

**P0–P3 is today's target line.** P4–P6 are for when you have time.

## P4. Roster queries (12 min) — `p4: roster queries`

`p4_roster.js` — an array of student objects. This is the shape of every API response you will meet.

- (a) Names with score ≥ 80 → array of strings (`filter`, then `map`)
- (b) Students per department → `{ CS: 5, EE: 3, ME: 2 }` (`forEach` + empty object)
- (c) Ranking by score, one line each: `1. Soyeon (CS) 97`. Copy before sorting; `sort()` is destructive.

```
80 or more: [ 'Yuna', 'Minho', 'Hana', 'Soyeon', 'Dohyun', 'Seoyeon' ]
per dept: { CS: 5, EE: 3, ME: 2 }
1. Soyeon (CS) 97
2. Yuna (CS) 92
3. Minho (EE) 88
...
```

## P5. Korean-typo fixer CLI (15 min) — `p5: inko cli`

`main.js`. Today's goal: a CLI that uses an npm package.
`"dhvms thtm"` was typed in English mode. Turn it back into `오픈 소스`.

1. `npm install inko`
2. `import Inko from "inko";` → `const inko = new Inko();` → `inko.en2ko(line)`
3. `readline` is already wired up. Input ends with a line `q`.
4. On close: filter empty lines → map to Korean → print numbered. `--reverse` uses `ko2en`.

```
$ node main.js
Type lines in English keys (en -> ko).
Type "q" to finish.
dhvms thtm
rltgjqm shem
q
1. 오픈 소스
2. 깃허브 노드
```

Then check: `package.json` has `inko` under `dependencies`, `node_modules/inko` exists, `git status` is clean.

## P6. Word frequency + your own module (12 min) — `p6: word frequency`

`p6_wordfreq.js` + `utils.js`. Read `sample.txt` with `fs.readFileSync(path, "utf8")`, then words → counts → top 5.
The helpers `tokenize`, `countWords`, `topN` live in `utils.js`. Export them, import them:
`import { tokenize } from "./utils.js"` — both `./` and `.js` are required.

```
$ node p6_wordfreq.js sample.txt
48 words, 17 distinct
code     9
the      7
ship     5
it       5
you      3
```

## Done early? — commit as `extra: ...`

- `npm install chalk` and color the P5 output.
- Rewrite P4 (b) with `reduce`.
- Add `"bin": { "fixko": "./main.js" }` to package.json and `#!/usr/bin/env node` as the first line of `main.js`; run `npx fixko`.

## Common errors

| You see | Cause | Fix |
|---|---|---|
| `node: command not found` / `'node' is not recognized` | Terminal opened before Node was installed | Open a **new** terminal (or restart VS Code). Still failing → reinstall Node LTS, reboot. |
| `Cannot use import statement outside a module` | No `"type": "module"` in package.json | Add it at the top level. Mind the comma. (Already there in this template.) |
| `Cannot find module './utils'` | ESM needs `./` **and** `.js` | `import { f } from "./utils.js";` |
| `Cannot find package 'inko'` | Wrong folder, or never ran `npm install` | `cd` to the repo root (where package.json is) → `npm install inko` → `ls node_modules/inko` |
| `git status` lists thousands of `node_modules/` files | No `.gitignore` | This template has one. If you deleted it: add `node_modules/` back, then `git rm -r --cached node_modules`. |
| `does not provide an export named 'tokenize'` | Forgot `export` in utils.js | `export function tokenize(...)` |
| `[ 10, 3, 8 ].sort()` gives `[ 10, 3, 8 ]` | Default sort is by string | `arr.sort((a, b) => a - b)` |

Read the error message top to bottom. The file name and line number are in it.
Ask AI to *explain* the message. Do not ask it to write the fix.
