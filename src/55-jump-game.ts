import {strict as assert} from 'assert';

function canJump(nums: number[]): boolean {
    const dp: boolean[] = Array(nums.length).fill(false);
    dp[nums.length - 1] = true;

    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = 1; j <= nums[i]; j++) {
            if (dp[i + j]) {
                dp[i] = true;
                break;
            }

            if (nums[i] - nums[i + j] <= j) {
                break;
            }
        }
    }

    return dp[0];
}

console.time('time');
assert.equal(canJump([2, 3, 1, 1, 4]), true);
assert.equal(canJump([3, 2, 1, 0, 4]), false);
console.timeEnd('time');
