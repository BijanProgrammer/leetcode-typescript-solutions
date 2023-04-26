import {strict as assert} from 'assert';

function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const original = x;

    let reversed = 0;
    while (x > 0) {
        reversed *= 10;
        reversed += x % 10;
        x -= x % 10;
        x /= 10;
    }

    return original === reversed;
}

console.time('time');
assert.equal(isPalindrome(121), true);
assert.equal(isPalindrome(-121), false);
assert.equal(isPalindrome(10), false);
console.timeEnd('time');
