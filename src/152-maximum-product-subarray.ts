import {strict as assert} from 'assert';

function maxProduct(nums: number[]): number {
    let minimumProduct = 1;
    let maximumProduct = 1;

    let result = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            minimumProduct = 1;
            maximumProduct = 1;

            continue;
        }

        const first = minimumProduct * nums[i];
        const second = maximumProduct * nums[i];

        minimumProduct = Math.min(first, second, nums[i]);
        maximumProduct = Math.max(first, second, nums[i]);

        result = Math.max(result, maximumProduct);
    }

    return result;
}

console.time('time');
assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
console.timeEnd('time');
