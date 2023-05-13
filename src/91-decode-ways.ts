import {strict as assert} from 'assert';

const VALID_CODES = new Set<string>(
    Array(26)
        .fill(null)
        .map((_, i) => (i + 1).toString())
);

const memo = new Map<string, number>();

function numDecodings(s: string): number {
    if (s === '') {
        return 1;
    }

    if (memo.has(s)) {
        return memo.get(s)!;
    }

    let result = 0;
    if (VALID_CODES.has(s.slice(0, 1))) {
        result += numDecodings(s.slice(1));
    }
    if (s.length >= 2 && VALID_CODES.has(s.slice(0, 2))) {
        result += numDecodings(s.slice(2));
    }

    memo.set(s, result);

    return result;
}

console.time('time');
assert.equal(numDecodings('12'), 2);
assert.equal(numDecodings('226'), 3);
assert.equal(numDecodings('06'), 0);
console.timeEnd('time');
