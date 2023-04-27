import {strict as assert} from 'assert';

function createCounter(n: number): () => void {
    return function () {
        return n++;
    };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

console.time('time');
const counter = createCounter(10);
assert.equal(counter(), 10);
assert.equal(counter(), 11);
assert.equal(counter(), 12);
console.timeEnd('time');
