import {strict as assert} from 'assert';

function maxSubArray(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    let maximumSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    let right = 0;
    while (right < nums.length) {
        currentSum += nums[right];

        if (maximumSum < currentSum) {
            maximumSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }

        right++;
    }

    return maximumSum;
}

console.time('time');
assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(maxSubArray([1]), 1);
assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
assert.equal(maxSubArray([-2, -1]), -1);
console.timeEnd('time');
