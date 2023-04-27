import {strict as assert} from 'assert';

function bulbSwitch(n: number): number {
    return Math.floor(Math.sqrt(n));
}

console.time('time');
assert.equal(bulbSwitch(3), 1);
assert.equal(bulbSwitch(0), 0);
assert.equal(bulbSwitch(1), 1);
console.timeEnd('time');
