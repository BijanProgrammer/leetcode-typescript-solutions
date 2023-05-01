import {strict as assert} from 'assert';

function removeDuplicates(nums: number[]): number {
    let offset = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) offset++;
        nums[i - offset] = nums[i];
    }
    return nums.length - offset;
}

console.time('time');
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
assert.equal(k, 5);
assert.deepEqual(nums.slice(0, k), [0, 1, 2, 3, 4]);
console.timeEnd('time');
