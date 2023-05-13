import {strict as assert} from 'assert';

function rob(nums: number[]): number {
    const dp: number[] = Array(nums.length + 1).fill(0);
    dp[nums.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }

    return dp[0];
}

console.time('time');
assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1]), 12);
console.timeEnd('time');
