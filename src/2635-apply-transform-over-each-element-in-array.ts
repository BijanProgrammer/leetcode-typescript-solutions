import {strict as assert} from 'assert';

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result: number[] = [];
    arr.forEach((item, i) => {
        result.push(fn(item, i));
    });
    return result;
}

console.time('time');
assert.deepEqual(
    map([1, 2, 3], function plusone(n) {
        return n + 1;
    }),
    [2, 3, 4]
);
assert.deepEqual(
    map([1, 2, 3], function plusI(n, i) {
        return n + i;
    }),
    [1, 3, 5]
);
assert.deepEqual(
    map([10, 20, 30], function constant() {
        return 42;
    }),
    [42, 42, 42]
);
console.timeEnd('time');
