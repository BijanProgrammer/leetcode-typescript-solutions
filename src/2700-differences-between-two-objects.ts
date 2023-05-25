import {strict as assert} from 'assert';

function objDiff(obj1: any, obj2: any): any {
    const result: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj1)) {
        if (!(key in obj2) || value === obj2[key]) {
            continue;
        }

        if (
            typeof value !== typeof obj2[key] ||
            typeof value !== 'object' ||
            !value ||
            Array.isArray(value) !== Array.isArray(obj2[key])
        ) {
            result[key] = [value, obj2[key]];
        } else {
            const childrenDiff = objDiff(value, obj2[key]);

            if (Object.entries(childrenDiff).length > 0) {
                result[key] = childrenDiff;
            }
        }
    }

    return result;
}

console.time('time');

assert.deepEqual(
    objDiff(
        {},
        {
            a: 1,
            b: 2,
        }
    ),
    {}
);

assert.deepEqual(
    objDiff(
        {
            a: 1,
            v: 3,
            x: [],
            z: {
                a: null,
            },
        },
        {
            a: 2,
            v: 4,
            x: [],
            z: {
                a: 2,
            },
        }
    ),
    {
        a: [1, 2],
        v: [3, 4],
        z: {
            a: [null, 2],
        },
    }
);

assert.deepEqual(
    objDiff(
        {
            a: 5,
            v: 6,
            z: [1, 2, 4, [2, 5, 7]],
        },
        {
            a: 5,
            v: 7,
            z: [1, 2, 3, [1]],
        }
    ),
    {
        v: [6, 7],
        z: {
            '2': [4, 3],
            '3': {
                '0': [2, 1],
            },
        },
    }
);

assert.deepEqual(
    objDiff(
        {
            a: {b: 1},
        },
        {
            a: [5],
        }
    ),
    {
        a: [{b: 1}, [5]],
    }
);

assert.deepEqual(
    objDiff(
        {
            a: [1, 2, {}],
            b: false,
        },
        {
            b: false,
            a: [1, 2, {}],
        }
    ),
    {}
);

console.timeEnd('time');
