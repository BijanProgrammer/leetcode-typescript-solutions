import {strict as assert} from 'assert';

const MINIMUM_INTEGER_NUMBER = -2_147_483_648;
const MAXIMUM_INTEGER_NUMBER = 2_147_483_647;

function reverse(x: number): number {
    const isNegative = x < 0;
    if (isNegative) x *= -1;

    let result = 0;
    while (x > 0) {
        result *= 10;
        result += x % 10;
        x = Math.floor(x / 10);
    }

    if (isNegative) result *= -1;

    return MINIMUM_INTEGER_NUMBER <= result && result <= MAXIMUM_INTEGER_NUMBER ? result : 0;
}

console.time('time');
assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
assert.equal(reverse(1534236469), 0);
console.timeEnd('time');
