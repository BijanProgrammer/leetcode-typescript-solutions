import {strict as assert} from 'assert';

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n < 0) return arr;

    for (let count = 0; count < n; count++) {
        const flattened: MultiDimensionalArray = [];

        let isChanged = false;
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                flattened.push(...item);
                isChanged = true;
            } else {
                flattened.push(item);
            }
        });

        arr = flattened;

        if (!isChanged) break;
    }

    return arr;
};

console.time('time');
assert.deepEqual(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0), [
    1,
    2,
    3,
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
]);
assert.deepEqual(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1), [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    [9, 10, 11],
    12,
    13,
    14,
    15,
]);
assert.deepEqual(
    flat(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, [9, 10, 11], 12],
            [13, 14, 15],
        ],
        2
    ),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
);
console.timeEnd('time');
