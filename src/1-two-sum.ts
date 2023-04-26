function twoSum(nums: number[], target: number): number[] {
    const map: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const j = map[target - nums[i]];
        if (j !== undefined) return [j, i];

        map[nums[i]] = i;
    }

    throw new Error('NOT SUPPORTED!');
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
