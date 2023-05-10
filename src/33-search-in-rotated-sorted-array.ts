import {strict as assert} from 'assert';

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        const middle = Math.floor((left + right) / 2);

        if (target === nums[middle]) {
            return middle;
        }

        if (nums[middle] <= nums[right]) {
            if (nums[middle] <= target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            if (nums[left] <= target && target <= nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return -1;
}

console.time('time');
assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert.equal(search([1], 0), -1);
assert.equal(search([5, 1, 3], 5), 0);
assert.equal(search([1, 3], 3), 1);
assert.equal(search([5, 1, 2, 3, 4], 1), 1);
console.timeEnd('time');
