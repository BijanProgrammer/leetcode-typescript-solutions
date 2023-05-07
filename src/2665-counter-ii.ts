import {strict as assert} from 'assert';

type ReturnObj = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter(init: number): ReturnObj {
    let count = init;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = init;
            return count;
        },
    };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.time('time');
const counter = createCounter(5);
assert.equal(counter.increment(), 6);
assert.equal(counter.reset(), 5);
assert.equal(counter.decrement(), 4);
console.timeEnd('time');
