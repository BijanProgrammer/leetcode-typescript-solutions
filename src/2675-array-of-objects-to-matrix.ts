import {strict as assert} from 'assert';

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
    const transposedMatrix = convertJsonToTransposedMatrix(arr);
    return convertTransposedMatrixToMatrix(transposedMatrix, arr.length);
}

function convertJsonToTransposedMatrix(arr: any[]): Record<string, unknown[]> {
    const result: Record<string, unknown[]> = {};

    arr.forEach((row, rowIndex) => {
        const children = flatObject(row);

        for (const [key, value] of Object.entries(children)) {
            if (!result[key]) {
                result[key] = Array(rowIndex).fill('');
            }

            result[key].push(value);
        }

        const allKeys = Object.keys(result);
        const newKeys = Object.keys(children);
        const missingKeys = allKeys.filter((x) => !newKeys.includes(x));

        for (const key of missingKeys) {
            result[key].push('');
        }
    });

    return result;
}

function flatObject(obj: object): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value !== 'object' || !value) {
            result[key] = value;
            continue;
        }

        const children = flatObject(value);

        for (const [childKey, childValue] of Object.entries(children)) {
            const combinedKey = `${key}.${childKey}`;
            result[combinedKey] = childValue;
        }
    }

    return result;
}

function convertTransposedMatrixToMatrix(
    transposedMatrix: Record<string, any[]>,
    rowsCount: number
): (string | number | boolean | null)[][] {
    const entries = Object.entries(transposedMatrix);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    const keys = entries.map((x) => x[0]);
    const values = entries.map((x) => x[1]);

    const matrix: (string | number | boolean | null)[][] = [];
    matrix.push(keys);

    for (let i = 0; i < rowsCount; i++) {
        matrix.push(values.map((x) => x[i]));
    }

    return matrix;
}

console.time('time');

assert.deepEqual(
    jsonToMatrix([
        {b: 1, a: 2},
        {b: 3, a: 4},
    ]),
    [
        ['a', 'b'],
        [2, 1],
        [4, 3],
    ]
);

assert.deepEqual(jsonToMatrix([{a: 1, b: 2}, {c: 3, d: 4}, {}]), [
    ['a', 'b', 'c', 'd'],
    [1, 2, '', ''],
    ['', '', 3, 4],
    ['', '', '', ''],
]);

assert.deepEqual(jsonToMatrix([{a: {b: 1, c: 2}}, {a: {b: 3, d: 4}}]), [
    ['a.b', 'a.c', 'a.d'],
    [1, 2, ''],
    [3, '', 4],
]);

assert.deepEqual(jsonToMatrix([[{a: null}], [{b: true}], [{c: 'x'}]]), [
    ['0.a', '0.b', '0.c'],
    [null, '', ''],
    ['', true, ''],
    ['', '', 'x'],
]);

assert.deepEqual(jsonToMatrix([{}, {}, {}]), [[], [], [], []]);

console.timeEnd('time');
