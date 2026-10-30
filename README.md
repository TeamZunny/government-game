# Government Game

An evolving desktop-first political-life simulator: start in a small local political role and pursue the highest office through elections, governing, relationships, research, and an independent world. The political career is nonlinear, with no player-visible rank ladder.

**Current build: Phase 0 plus personality creation and an initial playable first-week pilot, not a completed game.** The repo contains the V5 baseline plus a 15-question everyday-life personality test, five hidden character attributes shared by NPCs, the Personal Assistant, save export/import, session recovery, and a guided seven-day introduction for **new** save slots. Existing campaigns are left on the original gameplay path. A fully independent NPC world, a rebuilt midgame, and corrected election math remain future work.

## Play

Once GitHub Pages is enabled, play at **https://teamzunny.github.io/government-game/**. GitHub Pages must be set in **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. This is a public repository; the game's source code is public.

## Preserve existing local saves

The website does **not** automatically read saves from your old locally opened `index.html` because browser storage is tied to an origin.

1. Make a full copy of your current original game folder and avoid deleting the original `index.html`.
2. Leave the backup untouched. **In the original game folder at the original file path**, replace only `index.html` with the new GitHub-ready version, then open that exact path **in the same browser** as before. If your save does not appear, restore the old file and stop; do not reset or overwrite the slot.
3. Once you can see your old save in this updated local copy, click **Backup** and save the exported JSON outside the GitHub repository.
4. Open the GitHub Pages game. Click **Restore**, choose that JSON file, confirm the restore, and verify all three save slots.
5. Browser storage does not synchronize across devices. Make occasional backups; do not upload save JSON files to GitHub.

## Design priorities

- Fun-first interactive play. New characters begin with a seven-day, two-decision-per-day introduction: listening, voter contact, filing, coalition work, checking claims, limited time and follow-through. This is an early pilot; do not call it a complete tutorial or full game.
- Player choices produce genuinely different situations and delayed consequences, not just score updates.
- Personal Assistant automatically records information the player actually knows, without exposing off-screen secrets.
- The starting quiz defines **Charisma, Temper, Focus, Humility, and Common Sense**; each is a hidden value (3–19) that affects checks. NPCs possess the same attributes, with independent, saved day-to-day action rolls. Early scenes use saved contested checks; this is the initial simulation foundation, not a complete living-world engine.
- Clear, grounded wording; believable character continuity; no cramped text or obstructed scroll areas.
- No in-chat previews, desktop first, no Codex unless explicitly requested.

## Acceptance testing

See [QA_CHECKLIST.md](QA_CHECKLIST.md). A working web page is not the same as full gameplay approval. User acceptance and live save migration remain unverified until tested in the actual browser.

## Current first-week pilot

For a new slot, answer the existing origin quiz, enter the campaign and play the seven-day introduction. Choices affect the underlying campaign and the Personal Assistant automatically logs conversations, decisions, and reported events. Some later text changes based on earlier choices. It is deliberately gentler and less dashboard-heavy than the legacy campaign interface. At Day 8, the prototype returns to the existing campaign system; the midgame transition is not yet redesigned. **Do not overwrite an existing slot to test it.**

The new `first-week.js` is loaded by `index.html`. Both belong in the root of this repo. The previous slot key names have not changed.

## Personality quiz rollout

- **New save slots:** The first screen explains the personality test. It contains 15 clear everyday-life situations with three choices each. It has no political-issue questions, no right answers, and saves after every answer. A character profile is revealed before the first campaign day.
- **Existing completed saves:** Their profiles and campaign progress remain unchanged. Neutral 10/20 core attributes are added as compatibility defaults; this is not a retroactive re-test. The first-week tutorial does not restart.
- **Previously started older quizzes:** Continue their old quiz unchanged rather than silently switching their questions halfway through.
- **NPC world:** All 15 defined NPCs receive persistent attributes. Behind-the-scenes daily actions and rolls can change world pressure; only publicly observable events enter the Personal Assistant. These are early systems; deeper goals and independent campaign planning remain future work.
