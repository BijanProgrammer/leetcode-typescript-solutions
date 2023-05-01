import {strict as assert} from 'assert';

function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a, b) => a - b);

    const result: number[][] = [];

    for (let left = 0; left < nums.length - 3; ) {
        for (let middleLeft = left + 1; middleLeft < nums.length - 2; ) {
            let middleRight = middleLeft + 1;
            let right = nums.length - 1;

            while (middleRight < right) {
                const sum = nums[left] + nums[middleLeft] + nums[middleRight] + nums[right];
                if (sum < target) {
                    middleRight++;
                } else if (sum > target) {
                    right--;
                } else {
                    result.push([nums[left], nums[middleLeft], nums[middleRight], nums[right]]);

                    while (nums[middleRight] === nums[middleRight + 1]) middleRight++;
                    middleRight++;
                }
            }

            while (nums[middleLeft] === nums[middleLeft + 1]) middleLeft++;
            middleLeft++;
        }

        while (nums[left] === nums[left + 1]) left++;
        left++;
    }

    return result;
}

console.time('time');
assert.deepEqual(fourSum([1, 0, -1, 0, -2, 2], 0), [
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
]);
assert.deepEqual(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
console.timeEnd('time');
