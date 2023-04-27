import {strict as assert} from 'assert';

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function () {
    if (this.length <= 0) return -1;
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

console.time('time');
assert.equal([1, 2, 3].last(), 3);
assert.equal([].last(), -1);
console.timeEnd('time');
