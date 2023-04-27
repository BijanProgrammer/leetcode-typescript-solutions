import {strict as assert} from 'assert';

function* fibGenerator(): Generator<number, any, number> {
    let first = 0;
    let second = 1;
    let sum: number;

    yield first;
    yield second;

    while (true) {
        sum = first + second;
        yield sum;

        first = second;
        second = sum;
    }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

console.time('time');
const generator = fibGenerator();
assert.equal(generator.next().value, 0);
assert.equal(generator.next().value, 1);
assert.equal(generator.next().value, 1);
assert.equal(generator.next().value, 2);
assert.equal(generator.next().value, 3);
assert.equal(generator.next().value, 5);
assert.equal(generator.next().value, 8);
assert.equal(generator.next().value, 13);
assert.equal(generator.next().value, 21);
console.timeEnd('time');
