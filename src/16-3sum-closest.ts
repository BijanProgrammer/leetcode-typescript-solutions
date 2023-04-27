import {strict as assert} from 'assert';

function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b);

    let closestSum = 0;
    let closestSumDifference = Number.POSITIVE_INFINITY;

    for (let left = 0; left < nums.length - 2; left++) {
        while (nums[left] === nums[left - 1]) left++;

        let middle = left + 1;
        let right = nums.length - 1;

        while (middle < right) {
            const sum = nums[left] + nums[middle] + nums[right];
            const difference = Math.abs(target - sum);

            if (closestSumDifference > difference) {
                closestSum = sum;
                closestSumDifference = difference;
            }

            if (sum < target) {
                middle++;
            } else if (sum > target) {
                right--;
            } else {
                return closestSum;
            }
        }
    }

    return closestSum;
}

console.time('time');
assert.equal(threeSumClosest([-1, 2, 1, -4], 1), 2);
assert.equal(threeSumClosest([0, 0, 0], 1), 0);
console.timeEnd('time');
