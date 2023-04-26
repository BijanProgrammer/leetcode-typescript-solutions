import {strict as assert} from 'assert';

function lengthOfLongestSubstring(s: string): number {
    const characters = new Map<string, number>();

    let left = 0;
    let right = 0;
    let result = 0;

    while (right < s.length) {
        const duplicateCharacterPreviousIndex = characters.get(s[right]);

        if (duplicateCharacterPreviousIndex === undefined || duplicateCharacterPreviousIndex < left) {
            characters.set(s[right], right);
            right++;

            const length = right - left;
            if (result < length) result = length;

            continue;
        }

        const length = right - left;
        if (result < length) result = length;

        left = duplicateCharacterPreviousIndex! + 1;
        characters.set(s[right], right);

        right++;
    }

    return result;
}

console.time('time');
assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
assert.equal(lengthOfLongestSubstring('bbbbb'), 1);
assert.equal(lengthOfLongestSubstring('pwwkew'), 3);
assert.equal(lengthOfLongestSubstring('a'), 1);
assert.equal(lengthOfLongestSubstring('abc'), 3);
assert.equal(lengthOfLongestSubstring('abca'), 3);
assert.equal(lengthOfLongestSubstring('aab'), 2);
assert.equal(lengthOfLongestSubstring('abba'), 2);
assert.equal(lengthOfLongestSubstring('tmmzuxt'), 5);
console.timeEnd('time');
