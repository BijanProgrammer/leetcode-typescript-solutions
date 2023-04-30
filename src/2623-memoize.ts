import {strict as assert} from 'assert';

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
    const memory: Record<string, any> = {};

    return function (...args) {
        const key = `${args[0]};${args[1]}`;
        if (memory[key] === undefined) memory[key] = fn(...args);
        return memory[key];
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
