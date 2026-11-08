#!/bin/sh
# Build Signal Seeker: SIGSEEK.COM with pasmo (apt install pasmo, or set
# PASMO=/path/to/pasmo), SIGSEEK.DAT from sigseek.txt with mkdat.js (Node.js).
# DEST=<dir> also copies both files there (DigitalRerun's shelf disk).
set -e
cd "$(dirname "$0")"
${PASMO:-pasmo} sigseek.asm SIGSEEK.COM
node mkdat.js
if [ -n "$DEST" ]; then cp SIGSEEK.COM SIGSEEK.DAT "$DEST"/; fi
ls -l SIGSEEK.COM SIGSEEK.DAT
