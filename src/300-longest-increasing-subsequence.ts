import {strict as assert} from 'assert';

function lengthOfLIS(nums: number[]): number {
    const dp: number[] = Array(nums.length + 1).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
}

console.time('time');
assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert.equal(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
assert.equal(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
console.timeEnd('time');
