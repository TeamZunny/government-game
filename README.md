# Government Game

An evolving desktop-first political-life simulator: start in a small local political role and pursue the highest office through elections, governing, relationships, research, and an independent world. The political career is nonlinear, with no player-visible rank ladder.

**Current build: Phase 0 (foundation), not a completed game.** The live repo contains the V5 baseline plus the Personal Assistant, save export/import and session recovery. The redesigned playable tutorial week and living world are future work; do not report them as implemented.

## Play

Once GitHub Pages is enabled, play at **https://teamzunny.github.io/government-game/**. GitHub Pages must be set in **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. This is a public repository; the game's source code is public.

## Preserve existing local saves

The website does **not** automatically read saves from your old locally opened `index.html` because browser storage is tied to an origin.

1. Make a full copy of your current original game folder and avoid deleting the original `index.html`.
2. In a second copy of **that same original folder/path**, replace just the old `index.html` with this new one, and open it **in the same browser** used previously. If your save does not appear, revert the file and stop; do not reset or overwrite the slot.
3. Once you can see your old save in this updated local copy, click **Backup** and save the exported JSON outside the GitHub repository.
4. Open the GitHub Pages game. Click **Restore**, choose that JSON file, confirm the restore, and verify all three save slots.
5. Browser storage does not synchronize across devices. Make occasional backups; do not upload save JSON files to GitHub.

## Design priorities

- Fun-first interactive play, beginning with a gentle in-world tutorial; complexity increases with the scale of responsibility.
- Player choices produce genuinely different situations and delayed consequences, not just score updates.
- Personal Assistant automatically records information the player actually knows, without exposing off-screen secrets.
- Clear, grounded wording; believable character continuity; no cramped text or obstructed scroll areas.
- No in-chat previews, desktop first, no Codex unless explicitly requested.

## Acceptance testing

See [QA_CHECKLIST.md](QA_CHECKLIST.md). A working web page is not the same as full gameplay approval. User acceptance and live save migration remain unverified until tested in the actual browser.
