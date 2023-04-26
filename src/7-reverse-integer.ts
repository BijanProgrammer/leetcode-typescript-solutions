import {strict as assert} from 'assert';

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

    return -2_147_483_648 <= result && result <= 2_147_483_647 ? result : 0;
}

console.time('time');
assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
assert.equal(reverse(1534236469), 0);
console.timeEnd('time');
