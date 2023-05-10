import {strict as assert} from 'assert';

function hammingWeight(n: number): number {
    let counter = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            counter++;
        }

        n = n >>> 1;
    }

    return counter;
}

console.time('time');
assert.equal(hammingWeight(0b00000000000000000000000000001011), 3);
assert.equal(hammingWeight(0b00000000000000000000000010000000), 1);
assert.equal(hammingWeight(0b11111111111111111111111111111101), 31);
console.timeEnd('time');
