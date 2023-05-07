import {strict as assert} from 'assert';

const MINIMUM_INTEGER_NUMBER = -2_147_483_648;
const MAXIMUM_INTEGER_NUMBER = 2_147_483_647;

function divide(dividend: number, divisor: number): number {
    let isNegative = false;
    if (dividend < 0) {
        dividend = 0 - dividend;
        isNegative = !isNegative;
    }
    if (divisor < 0) {
        divisor = 0 - divisor;
        isNegative = !isNegative;
    }

    const dividendString = dividend.toString();
    let resultString = '';
    let index = 0;
    let carry = 0;

    while (index < dividendString.length) {
        let currentDividend = +`${carry}${dividendString[index]}`;

        let currentQuotient = 0;
        while (currentDividend >= divisor) {
            currentDividend -= divisor;
            currentQuotient++;
        }

        carry = currentDividend;
        resultString += currentQuotient.toString();

        index++;
    }

    let result = +resultString;
    if (isNegative) {
        result = 0 - result;
    }

    return Math.max(MINIMUM_INTEGER_NUMBER, Math.min(result, MAXIMUM_INTEGER_NUMBER));
}

console.time('time');
assert.equal(divide(10, 3), 3);
assert.equal(divide(7, -3), -2);
assert.equal(divide(-2147483648, -3), 715827882);
console.timeEnd('time');
