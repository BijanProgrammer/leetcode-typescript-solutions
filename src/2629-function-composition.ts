import {strict as assert} from 'assert';

type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        let value = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            value = functions[i](value);
        }

        return value;
    };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

console.time('time');
assert.equal(compose([(x) => x + 1, (x) => 2 * x])(4), 9);
console.timeEnd('time');
