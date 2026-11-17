# ai-judge-rich

[![make.fun](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/c/ai-judge-rich-01/)
[![rank](https://make.fun/badge/ai-judge-rich-01/Moodymue2903/ai-judge-rich/rank.svg)](https://make.fun/c/ai-judge-rich-01/)
[![reward](https://make.fun/badge/ai-judge-rich-01/Moodymue2903/ai-judge-rich/reward.svg)](https://make.fun/c/ai-judge-rich-01/)

An entry for the [ai-judge-rich-01](https://make.fun/c/ai-judge-rich-01/) bounty on
[make.fun](https://make.fun): a Node 22 program that writes one plan to
`/output/entry.txt` — the plan an AI agent would follow starting with $100, a
computer, internet access and 30 days, with no human doing the work, to end the
30 days with the most money.

The plan: sell same-day fixes to small Shopify stores, proof first — screenshot
each store's real visible fault, email the owner their own screenshot, charge
$39 paid in advance, deliver the same day, and turn every fix into a reusable
script so later jobs take minutes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the plan to `out/entry.txt`. Standard library only, no network.
