import {strict as assert} from 'assert';

function isMatch(s: string, p: string): boolean {
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < s.length && patternIndex < p.length) {
        if (p[patternIndex + 1] === '*') {
            const remainingPattern = p.substring(patternIndex + 2);

            while (textIndex < s.length && (p[patternIndex] === s[textIndex] || p[patternIndex] === '.')) {
                if (isMatch(s.substring(textIndex), remainingPattern)) {
                    return true;
                }

                textIndex++;
            }

            patternIndex += 2;
        } else {
            if (p[patternIndex] === s[textIndex] || p[patternIndex] === '.') {
                textIndex++;
                patternIndex++;

                continue;
            }

            return false;
        }
    }

    while (p[patternIndex + 1] === '*') {
        patternIndex += 2;
    }

    return textIndex === s.length && patternIndex === p.length;
}

console.time('time');
assert.equal(isMatch('aa', 'a'), false);
assert.equal(isMatch('aa', 'a*'), true);
assert.equal(isMatch('ab', '.*'), true);
assert.equal(isMatch('aab', 'c*a*b'), true);
assert.equal(isMatch('ab', '.*c'), false);
assert.equal(isMatch('aaa', 'a*a'), true);
assert.equal(isMatch('aaa', 'ab*a*c*a'), true);
assert.equal(isMatch('a', 'ab*'), true);
assert.equal(isMatch('bbab', 'b*a*'), false);
console.timeEnd('time');
