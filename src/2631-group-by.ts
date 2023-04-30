import {strict as assert} from 'assert';

declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}

Array.prototype.groupBy = function (fn) {
    const result: Record<string, any[]> = {};

    for (const item of this) {
        const key = fn(item);
        const value = result[key];

        if (Array.isArray(value)) {
            value.push(item);
        } else {
            result[key] = [item];
        }
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.time('time');
assert.deepEqual([1, 2, 3].groupBy(String), {'1': [1], '2': [2], '3': [3]});
console.timeEnd('time');
