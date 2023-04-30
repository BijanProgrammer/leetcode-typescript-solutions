import {strict as assert} from 'assert';

declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount !== this.length) return [];

    const result = new Array(rowsCount).fill(null).map(() => new Array(colsCount));

    let i = 0;
    let j = 0;

    let direction: 'up' | 'down' = 'down';

    for (let originalIndex = 0; originalIndex < this.length; originalIndex++) {
        result[i][j] = this[originalIndex];

        if (direction === 'down') {
            if (i === rowsCount - 1) {
                direction = 'up';
                j++;
            } else {
                i++;
            }
        } else {
            if (i === 0) {
                direction = 'down';
                j++;
            } else {
                i--;
            }
        }
    }

    return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

console.time('time');
assert.deepEqual([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4), [
    [19, 17, 16, 15],
    [10, 1, 14, 4],
    [3, 2, 12, 20],
    [7, 5, 18, 11],
    [9, 8, 6, 13],
]);
assert.deepEqual([1, 2, 3, 4].snail(1, 4), [[1, 2, 3, 4]]);
assert.deepEqual([1, 3].snail(2, 2), []);
console.timeEnd('time');
