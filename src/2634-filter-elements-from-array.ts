import {strict as assert} from 'assert';

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const result = [];

    for (const [index, item] of arr.entries()) {
        if (fn(item, index)) {
            result.push(item);
        }
    }

    return result;
}

console.time('time');
assert.deepEqual(
    filter([0, 10, 20, 30], function greaterThan10(n) {
        return n > 10;
    }),
    [20, 30]
);
assert.deepEqual(
    filter([1, 2, 3], function firstIndex(n, i) {
        return i === 0;
    }),
    [1]
);
assert.deepEqual(
    filter([-2, -1, 0, 1, 2], function plusOne(n) {
        return n + 1;
    }),
    [-2, 0, 1, 2]
);
console.timeEnd('time');
