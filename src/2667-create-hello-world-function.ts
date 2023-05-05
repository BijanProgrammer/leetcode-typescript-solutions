import {strict as assert} from 'assert';

function createHelloWorld() {
    return function (...args: any[]): string {
        return 'Hello World';
    };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

console.time('time');
assert.equal(createHelloWorld()(), 'Hello World');
assert.equal(createHelloWorld()({}, null, 42), 'Hello World');
console.timeEnd('time');
