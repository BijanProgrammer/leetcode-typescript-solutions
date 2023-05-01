import {strict as assert} from 'assert';

function removeElement(nums: number[], val: number): number {
    let offset = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) offset++;
        else nums[i - offset] = nums[i];
    }
    return nums.length - offset;
}

console.time('time');
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const k = removeElement(nums, 2);
assert.equal(k, 5);
assert.deepEqual(nums.slice(0, k), [0, 1, 4, 0, 3]);
console.timeEnd('time');
