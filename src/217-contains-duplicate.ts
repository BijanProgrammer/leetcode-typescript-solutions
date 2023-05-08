import {strict as assert} from 'assert';

function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();

    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.time('time');
assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
console.timeEnd('time');
