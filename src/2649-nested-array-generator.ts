import {strict as assert} from 'assert';

type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    for (const item of arr) {
        if (typeof item === 'number') {
            yield item;
        } else {
            for (const nestedItem of inorderTraversal(item)) {
                yield nestedItem;
            }
        }
    }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

console.time('time');

const generator = inorderTraversal([[[6]], [1, 3], []]);
assert.equal(generator.next().value, 6);
assert.equal(generator.next().value, 1);
assert.equal(generator.next().value, 3);
assert.equal(generator.next().done, true);

console.timeEnd('time');
