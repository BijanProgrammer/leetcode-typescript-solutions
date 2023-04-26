import {strict as assert} from 'assert';

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every((str) => str[i] === strs[0][i])) result += strs[0][i];
        else break;
    }

    return result;
}

console.time('time');
assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '');
console.timeEnd('time');
