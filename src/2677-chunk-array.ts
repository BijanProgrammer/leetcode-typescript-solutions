import {strict as assert} from 'assert';

function chunk(arr: any[], size: number): any[][] {
    const result: any[][] = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % size === 0) {
            result.push([]);
        }

        result.at(-1)!.push(arr[i]);
    }

    return result;
}

console.time('time');
assert.deepEqual(chunk([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]]);
assert.deepEqual(chunk([1, 9, 6, 3, 2], 3), [
    [1, 9, 6],
    [3, 2],
]);
assert.deepEqual(chunk([8, 5, 3, 2, 6], 6), [[8, 5, 3, 2, 6]]);
assert.deepEqual(chunk([], 1), []);
console.timeEnd('time');
