import {strict as assert} from 'assert';

type Fn = (...params: any) => any;

const RESULT_SYMBOL = Symbol('result');

function memoize(fn: Fn): Fn {
    const memory = new Map<any, any>();

    return function (...args) {
        let currentMemory = memory;

        for (let i = 0; i < args.length; i++) {
            if (!currentMemory.has(args[i])) {
                currentMemory.set(args[i], new Map<any, any>());
            }

            currentMemory = currentMemory.get(args[i]);
        }

        if (currentMemory.has(RESULT_SYMBOL)) {
            return currentMemory.get(RESULT_SYMBOL);
        }

        const result = fn(...args);
        currentMemory.set(RESULT_SYMBOL, result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

console.time('time');

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

assert.equal(memoizedFn(2, 3), 5);
assert.equal(memoizedFn(2, 3), 5);
assert.equal(callCount, 1);

console.timeEnd('time');
