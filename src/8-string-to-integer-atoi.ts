import {strict as assert} from 'assert';

const MINIMUM_INTEGER_NUMBER = -2_147_483_648;
const MAXIMUM_INTEGER_NUMBER = 2_147_483_647;

function myAtoi(s: string): number {
    let i = 0;

    while (s[i] == ' ') i++;

    const isNegative = s[i] === '-';
    if (s[i] === '+' || s[i] === '-') i++;

    let result = 0;
    while ('0' <= s[i] && s[i] <= '9') {
        result *= 10;
        result += s.charCodeAt(i) - 48;
        i++;
    }

    result = (isNegative ? -1 : 1) * result;

    return Math.max(MINIMUM_INTEGER_NUMBER, Math.min(result, MAXIMUM_INTEGER_NUMBER));
}

console.time('time');
assert.equal(myAtoi('42'), 42);
assert.equal(myAtoi('   -42'), -42);
assert.equal(myAtoi('4193 with words'), 4193);
assert.equal(myAtoi('-91283472332'), -2147483648);
console.timeEnd('time');
