import {strict as assert} from 'assert';

function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (right - left > 1) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < nums[right]) {
            right = middle;
        } else {
            left = middle;
        }
    }

    return Math.min(nums[left], nums[right]);
}

console.time('time');
assert.equal(findMin([3, 4, 5, 1, 2]), 1);
assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert.equal(findMin([11, 13, 15, 17]), 11);
console.timeEnd('time');
