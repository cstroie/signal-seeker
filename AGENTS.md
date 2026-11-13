# AGENTS.md

Signal Seeker: a cozy night-shift game in Z80 assembly for CP/M 2.2 (80x24, VT100/VT52/ADM-3A,
plain ASCII). Standalone project; DigitalRerun only ships the built files. Read `DESIGN.md` first.

- Build: `sh build.sh` (needs `node` and `pasmo`): `SIGSEEK.COM` from `sigseek.asm`, `SIGSEEK.DAT`
  from `sigseek.txt` with `mkdat.js`. Neither is in git; releases carry both.
- The game's words live in `sigseek.txt`; `mkdat.js` refuses a line too long for the screen.
  Edit the text and run `node mkdat.js`, no assembler needed.
- Test: `node --test test/*.test.js` (the `.DAT` is current, an overlong line is refused; build
  first). The emulator harness lives in DigitalRerun, which has this repo as `apps/sigseek`.
- Plain ASCII only. Keep the save format versioned (`DESIGN.md`) so old saves still load.
- Version: `VERSION` and `CHANGELOG.md`; tag releases `vX.Y.Z`. Commits: `feat:`, `fix:`, `docs:`.
