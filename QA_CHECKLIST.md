# Phase 0 QA checklist

- **Protect prior saves:** Copy old game folder. Check three slots with same file path/browser.
- **Backup:** Click Backup and verify a downloaded `.json` containing all populated slots. Keep outside repo.
- **Restore:** On different browser origin, restore the JSON and verify slots and character history.
- **Overwrite guard:** Starting New over an existing slot asks for confirmation; Cancel changes nothing.
- **Invalid data guard:** Corrupted slot does not get replaced automatically and raw content can still be exported.
- **Quiz:** Start in empty slot; answer 25 questions; reveal appears and Enter works.
- **Assistant:** Open Personal Assistant, search, filter, close, resume. Decisions and scene text appear automatically.
- **Scene persistence:** Start a situation, choose a response, pause, refresh, resume from the same beat. No duplicate application of a selected response.
- **Layout:** At 1366×768 and 1600×900, assistant dialog scrolls internally and no controls are trapped.
- **Hosting:** GitHub Pages serves the same app from one URL, and edits to main deploy after Pages builds.

Current build is not fully live-tested in the user's browser; do not label it as approved.
## First-week pilot — automated simulation (2026-10-29)

- PASS: Combined main-game and first-week scripts parse in JavaScript.
- PASS: New slot + 25 quiz answers enters Day 1 tutorial; seven days of two choices each advance to Day 8.
- PASS: Consequences and Personal Assistant records persist across mocked localStorage reload.
- PASS: Re-clicking an already chosen stage does not apply the choice again.
- PASS: Previously created campaign with no tutorial flag stays in the original game.
- NOT VERIFIED: full browser UI layout and click interaction at 1366×768 / 1600×900 on the live site.
- NOT VERIFIED: GitHub Pages deployment propagation and game feel in the user's browser.
- NOT IMPLEMENTED: redesigned campaign after Day 7; independently scheduled NPCs; corrected election win math.

These passes used a simulated DOM and storage, not a real-user browser acceptance test. Do not promote them to browser-tested or player-approved status.

## Personality and NPC attributes — 2026-10-29

- PASS (simulated): New game shows the purpose of the personality test before the first question.
- PASS (simulated): 15 everyday-life questions / three answers each; character profile and five attributes generated, values in 3–19.
- PASS (simulated): Quit after question 4, reload and see question 5; no progress loss.
- PASS (simulated): All 15 defined NPCs have five persistent attributes.
- PASS (simulated): First-week dialogue creates saved, non-rerolling player-vs-NPC attribute checks.
- PASS (simulated): Advancing a day runs independent NPC action checks, saving private world history while restricting assistant entries to publicly known events.
- PASS (simulated): Existing completed character keeps title and progress, receives neutral compatibility attributes; older unfinished quizzes continue their old question sequence.
- NOT VERIFIED: Live Pages propagation and user-browser visual fit after this change.

The game still needs genuine playtesting for whether its random outcomes feel fair and consequential. Do not claim this is a fully modeled political ecosystem.
