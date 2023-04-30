import {strict as assert} from 'assert';

function areDeeplyEqual(o1: any, o2: any): boolean {
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || !o1 || !o2) return o1 === o2;
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;
    if (Object.entries(o1).length !== Object.entries(o2).length) return false;

    for (const key of Object.keys(o1)) {
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }

    return true;
}

console.time('time');
assert.equal(areDeeplyEqual({x: 1, y: 2}, {x: 1, y: 2}), true);
assert.equal(areDeeplyEqual({y: 2, x: 1}, {x: 1, y: 2}), true);
assert.equal(areDeeplyEqual({x: null, L: [1, 2, 3]}, {x: null, L: ['1', '2', '3']}), false);
assert.equal(areDeeplyEqual(true, false), false);
console.timeEnd('time');
