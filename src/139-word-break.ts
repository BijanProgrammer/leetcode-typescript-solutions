import {strict as assert} from 'assert';

function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = Array(s.length + 1).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (s.slice(i, i + word.length) === word && dp[i + word.length]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[0];
}

console.time('time');
assert.equal(wordBreak('leetcode', ['leet', 'code']), true);
assert.equal(wordBreak('applepenapple', ['apple', 'pen']), true);
assert.equal(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']), false);
console.timeEnd('time');
