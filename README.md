# Government Game

An evolving desktop-first political-life simulator: start in a small local political role and pursue the highest office through elections, governing, relationships, research, and an independent world. The political career is nonlinear, with no player-visible rank ladder.

**Current build: Phase 0 plus personality creation and an initial playable first-week pilot, not a completed game.** The repo contains the V5 baseline plus an 18-question everyday-life personality test, seven personality attributes plus earned Experience shared by NPCs, the Personal Assistant, save export/import, session recovery, and a guided seven-day introduction for **new** save slots. Existing campaigns are left on the original gameplay path. A fully independent NPC world, a rebuilt midgame, and corrected election math remain future work.

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
- The starting quiz defines **Charisma, Temper, Focus, Humility, Common Sense, Empathy, and Relatability**; each influences hidden checks. **Experience is the eighth attribute and cannot be earned through quiz answers.** Experience points are gained once for completed interactions and passing in-game days, building internal experience levels; only level milestones raise the Experience attribute. These are character-growth levels, not a political rank ladder. NPCs use the same attributes and can advance their own levels through actions and time.
- Clear, grounded wording; believable character continuity; no cramped text or obstructed scroll areas.
- No in-chat previews, desktop first, no Codex unless explicitly requested.

## Acceptance testing

See [QA_CHECKLIST.md](QA_CHECKLIST.md). A working web page is not the same as full gameplay approval. User acceptance and live save migration remain unverified until tested in the actual browser.

## Current first-week pilot

For a new slot, answer the personality quiz, enter the campaign and play the seven-day introduction. Choices affect the underlying campaign and the Personal Assistant automatically logs conversations, decisions, and reported events. Some later text changes based on earlier choices. It is deliberately gentler and less dashboard-heavy than the legacy campaign interface. At Day 8, the prototype returns to the existing campaign system; the midgame transition is not yet redesigned. **Do not overwrite an existing slot to test it.**

The new `personality.js` and `first-week.js` scripts are both loaded by `index.html`. All three belong in the root of this repo. The previous slot key names have not changed.

## Personality quiz rollout

- **New save slots:** The first screen explains the personality test. It contains 18 clear everyday-life situations with three choices each. It has no political-issue questions, no right answers, and saves after every answer. A character profile is revealed before the first campaign day.
- **Existing completed saves:** Their profiles and campaign progress remain unchanged. Existing core attributes are preserved. The two new personality attributes default to 10 when missing, and Experience begins at 0 without retroactive XP; this is not a re-test. The first-week tutorial does not restart.
- **Previously started older quizzes:** Continue their old quiz unchanged rather than silently switching their questions halfway through.
- **NPC world:** All 15 defined NPCs receive seven personality traits plus Experience. NPC XP accrues through their own in-game activities and passing days; migration does not award backdated XP. Behind-the-scenes daily actions and rolls can change world pressure; only publicly observable events enter the Personal Assistant. These are early systems; deeper goals and independent campaign planning remain future work.

## Named career offices and current goals

The game now includes a **60-position office directory** (Career button): Education (5), Town & City (12), County & Regional (12), State (17), Federal (14). Each office has a name, a short description of its responsibilities, a selection method (elected, appointed, or chosen by colleagues), and a way into the role. Local/state structures and eligibility differ by jurisdiction; the directory describes common U.S. offices rather than asserting every role exists in every place.

Current playable status is **School Board Candidate** (not an elected office); **office held: none**. The immediate objective is **win the School Board election**, with a compact set of active early goals: meet voters, submit candidacy paperwork, build support. The current day has one clearly identified task. On an election result the prototype can mark *Member-elect* or *Former Candidate*, but being sworn into office and the governing loop are **not yet implemented**. The old election result formula still needs rebuilding and may misjudge outcomes; directory contents do not imply future offices are playable.

This is **not** a mandatory linear ladder. The office directory documents different routes. Experience levels increase character attributes; they are **not political jobs or office unlocks**. The full political career transitions, appointed pathways, constitutional eligibility checks, and governing duties are future development work.

Design references: [USAGov elected officials](https://www.usa.gov/elected-officials), [USAGov government branches](https://www.usa.gov/branches-of-government), [National School Boards Association](https://www.nsba.org/who-we-are/our-members/local-governance), [National League of Cities](https://www.nlc.org/resource/cities-101-forms-of-local-government/), [National Association of Counties](https://www.naco.org/page/county-structure-authority-and-finances), [U.S. House](https://www.house.gov/the-house-explained), and [USAGov presidential qualifications](https://www.usa.gov/presidents). Read each office as a general role, not a universal legal description.
