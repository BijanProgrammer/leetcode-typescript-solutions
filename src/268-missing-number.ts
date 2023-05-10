import {strict as assert} from 'assert';

function missingNumber(nums: number[]): number {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (const x of nums) actualSum += x;

    return expectedSum - actualSum;
}

console.time('time');
assert.deepEqual(missingNumber([3, 0, 1]), 2);
assert.deepEqual(missingNumber([0, 1]), 2);
assert.deepEqual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
console.timeEnd('time');
