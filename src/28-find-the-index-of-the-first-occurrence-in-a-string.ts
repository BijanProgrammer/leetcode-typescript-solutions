import {strict as assert} from 'assert';

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}

console.time('time');
assert.equal(strStr('sadbutsad', 'sad'), 0);
assert.equal(strStr('leetcode', 'leeto'), -1);
console.timeEnd('time');
