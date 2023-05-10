import {strict as assert} from 'assert';

function reverseBits(n: number): number {
    let result = 0b0;

    for (let i = 0; i < 32; i++) {
        const currentDigit = n & 1;

        result = (result << 1) >>> 0;
        result = (result | currentDigit) >>> 0;

        n = n >>> 1;
    }

    return result;
}

console.time('time');
assert.equal(reverseBits(0b00000010100101000001111010011100), 0b00111001011110000010100101000000);
assert.equal(reverseBits(0b11111111111111111111111111111101), 0b10111111111111111111111111111111);
console.timeEnd('time');
