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