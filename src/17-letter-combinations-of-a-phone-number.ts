import {strict as assert} from 'assert';

const DIGIT_TO_LETTERS: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    if (digits.length === 1) return DIGIT_TO_LETTERS[digits[0]];

    const digit = digits[0];
    const suffixes = letterCombinations(digits.slice(1));
    return DIGIT_TO_LETTERS[digit].flatMap((x) => suffixes.map((y) => x + y));
}

console.time('time');
assert.deepEqual(letterCombinations('23'), ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
assert.deepEqual(letterCombinations(''), []);
assert.deepEqual(letterCombinations('2'), ['a', 'b', 'c']);
console.timeEnd('time');
