import {strict as assert} from 'assert';

function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(rob1(nums.slice(0, nums.length - 1)), rob1(nums.slice(1)));
}

function rob1(nums: number[]): number {
    const dp: number[] = Array(nums.length + 1).fill(0);
    dp[nums.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }

    return dp[0];
}

console.time('time');
assert.equal(rob([2, 3, 2]), 3);
assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([1, 2, 3]), 3);
console.timeEnd('time');
