import {strict as assert} from 'assert';

function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
    let isCalled = false;

    return function (...args) {
        if (isCalled) return;

        isCalled = true;
        return fn(...args);
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

console.time('time');
const fn = (a: number, b: number, c: number) => a + b + c;
const onceFn = once(fn);
assert.equal(onceFn(1, 2, 3), 6);
assert.equal(onceFn(2, 3, 6), undefined);
console.timeEnd('time');
