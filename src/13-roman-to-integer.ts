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

function romanToInt(s: string): number {
    let result = 0;

    let i = 0;
    while (i < CHARACTER_VALUES.length) {
        if (s.startsWith(CHARACTER_VALUES[i].character)) {
            result += CHARACTER_VALUES[i].value;
            s = s.substring(CHARACTER_VALUES[i].character.length);
        } else {
            i++;
        }
    }

    return result;
}

console.time('time');
assert.equal(romanToInt('III'), 3);
assert.equal(romanToInt('LVIII'), 58);
assert.equal(romanToInt('MCMXCIV'), 1994);
console.timeEnd('time');
