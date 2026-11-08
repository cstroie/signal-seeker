'use strict';
// SIGSEEK.DAT is current with sigseek.txt, and mkdat checks the screen widths.
// Run: node --test
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { parse, pack } = require('../mkdat.js');

const ROOT = path.join(__dirname, '..');

test('SIGSEEK.DAT is packed from sigseek.txt as it stands', () => {
    const want = pack(parse(fs.readFileSync(path.join(ROOT, 'sigseek.txt'), 'latin1')));
    assert.deepEqual(new Uint8Array(fs.readFileSync(path.join(ROOT, 'SIGSEEK.DAT'))), want);
});

test('mkdat refuses a line too long for the screen', () => {
    const src = fs.readFileSync(path.join(ROOT, 'sigseek.txt'), 'latin1').replace('Hello Kettle-7!', 'Hello Kettle-7, how are you tonight?');
    assert.throws(() => parse(src), /at most 20/);
});
