import {strict as assert} from 'assert';

function curry(fn: Function): Function {
    return function curried(...args: any[]) {
        if (fn.length === args.length) return fn.call(null, ...args);
        return curry(fn.bind(null, ...args));
    };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

console.time('time');

function sum(a: number, b: number, c: number): number {
    return a + b + c;
}

const csum = curry(sum);

assert.equal(csum(1, 2, 3), 6);
assert.equal(csum(1)(2)(3), 6);
assert.equal(csum(1)(2, 3), 6);
assert.equal(csum(1, 2)(3), 6);

console.timeEnd('time');
