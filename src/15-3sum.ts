function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const result: number[][] = [];

    for (let left = 0; left < nums.length - 2; left++) {
        while (nums[left] === nums[left - 1]) left++;

        let middle = left + 1;
        let right = nums.length - 1;

        while (middle < right) {
            const sum = nums[left] + nums[middle] + nums[right];

            if (sum < 0) {
                middle++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[left], nums[middle], nums[right]]);

                while (nums[middle + 1] === nums[middle]) middle++;

                middle++;
            }
        }
    }

    return result;
}

console.time('time');
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([1, 2, -2, -1]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.timeEnd('time');
