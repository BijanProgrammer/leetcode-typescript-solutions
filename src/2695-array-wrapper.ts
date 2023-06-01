import {strict as assert} from 'assert';

class ArrayWrapper {
    private numbers!: number[];

    public constructor(nums: number[]) {
        this.numbers = nums;
    }

    public valueOf() {
        return this.numbers.reduce((sum, x) => sum + x, 0);
    }

    public toString() {
        return `[${this.numbers.join(',')}]`;
    }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

console.time('time');

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
assert.equal(+obj1 + +obj2, 10);
assert.equal(String(obj1), '[1,2]');
assert.equal(String(obj2), '[3,4]');

console.timeEnd('time');
