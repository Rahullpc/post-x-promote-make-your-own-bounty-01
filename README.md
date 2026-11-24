# Promote make.fun's make-your-own-bounty post on X

[![make.fun — post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Rahullpc/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Rahullpc/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for [post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post of my own on X that quotes [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached and make.fun, the @makefunai tag and my play code in its text. The top 50 posts share $250, ranked by replies + reposts + quotes at the deadline.

## The post is the entry

The post: https://x.com/Keixsbt/status/2125172667942899986

Posted 24 November 2026 by @Keixsbt (public account). It quotes make.fun's post, carries its own photo, and its text carries @makefunai, the link https://make.fun/sponsor/new and play code `makefun-clover-floss-bantam`.

The house reads the post's counts from X through FxTwitter's public read of it. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes move nothing.

## What the program does

`main.ts` (Node 22, standard library only, no network) validates `POST.json` — it must name an X post address — and copies it to the output directory, where the gate reads it. The program writes nothing about the post itself; the post is the entry.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
