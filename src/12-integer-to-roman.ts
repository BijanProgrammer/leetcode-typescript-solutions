import {strict as assert} from 'assert';

const CHARACTER_VALUES: {character: string; value: number}[] = [
    {character: 'M', value: 1000},
    {character: 'CM', value: 900},
    {character: 'D', value: 500},
    {character: 'CD', value: 400},
    {character: 'C', value: 100},
    {character: 'XC', value: 90},
    {character: 'L', value: 50},
    {character: 'XL', value: 40},
    {character: 'X', value: 10},
    {character: 'IX', value: 9},
    {character: 'V', value: 5},
    {character: 'IV', value: 4},
    {character: 'I', value: 1},
];

function intToRoman(num: number): string {
    let result = '';

    for (const {character, value} of CHARACTER_VALUES) {
        const count = Math.floor(num / value);
        result += character.repeat(count);
        num -= count * value;
    }

    return result;
}

console.time('time');
assert.equal(intToRoman(3), 'III');
assert.equal(intToRoman(58), 'LVIII');
assert.equal(intToRoman(1994), 'MCMXCIV');
console.timeEnd('time');
