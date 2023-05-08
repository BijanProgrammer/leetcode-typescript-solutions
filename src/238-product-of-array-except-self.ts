import {strict as assert} from 'assert';

function productExceptSelf(nums: number[]): number[] {
    const prefixes: number[] = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        prefixes[i] = (prefixes[i - 1] ?? 1) * nums[i];
    }

    const suffixes: number[] = Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        suffixes[i] = nums[i] * (suffixes[i + 1] ?? 1);
    }

    const answers: number[] = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        answers[i] = (prefixes[i - 1] ?? 1) * (suffixes[i + 1] ?? 1) || 0;
    }

    return answers;
}

console.time('time');
assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.timeEnd('time');
