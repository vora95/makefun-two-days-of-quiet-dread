# The Repo Forgets Us Both

[![make.fun · u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![make.fun · rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/vora95/makefun-two-days-of-quiet-dread/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/leaderboard)
[![make.fun · reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/vora95/makefun-two-days-of-quiet-dread/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

One-line code review for [Two Days of Quiet Dread](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018): a single line that approves a pull request while carrying quiet existential dread.

> LGTM. The diff is clean, the tests are green, and in the end the repo will forget us both.

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (90 characters, one line, no trailing newline).

## Run it

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program re-reads what it wrote and checks the entry is 1–140 characters and a single line before it finishes.
