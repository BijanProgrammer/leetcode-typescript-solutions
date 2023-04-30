import {strict as assert} from 'assert';

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}

console.time('time');
assert.equal(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr;
        },
        0
    ),
    10
);
assert.equal(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr * curr;
        },
        100
    ),
    130
);
assert.equal(
    reduce(
        [],
        function sum(accum, curr) {
            return 0;
        },
        25
    ),
    25
);
console.timeEnd('time');
