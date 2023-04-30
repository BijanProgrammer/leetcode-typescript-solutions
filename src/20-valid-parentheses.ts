import {strict as assert} from 'assert';

const PARENTHESES: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
};

function isValid(s: string): boolean {
    const stack: string[] = [];

    for (const character of s) {
        if (character in PARENTHESES) {
            stack.push(character);
        } else {
            if (stack.length === 0) return false;

            const pair = stack.pop()!;
            if (PARENTHESES[pair] !== character) return false;
        }
    }

    return stack.length === 0;
}

console.time('time');
assert.deepEqual(isValid('()'), true);
assert.deepEqual(isValid('()[]{}'), true);
assert.deepEqual(isValid('(]'), false);
console.timeEnd('time');
