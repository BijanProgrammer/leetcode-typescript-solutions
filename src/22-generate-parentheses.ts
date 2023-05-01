import {strict as assert} from 'assert';

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    generateParenthesisRecursively(2 * n, '', 0, 0, result);
    return result;
}

function generateParenthesisRecursively(
    n: number,
    combination: string,
    usedOpensCount: number,
    usedClosesCount: number,
    answers: string[]
): void {
    if (combination.length === n) {
        answers.push(combination);
        return;
    }

    if (usedOpensCount < n / 2) {
        generateParenthesisRecursively(n, combination + '(', usedOpensCount + 1, usedClosesCount, answers);
    }
    if (usedClosesCount < usedOpensCount) {
        generateParenthesisRecursively(n, combination + ')', usedOpensCount, usedClosesCount + 1, answers);
    }
}

console.time('time');
assert.deepEqual(new Set(generateParenthesis(3)), new Set(['((()))', '(()())', '(())()', '()(())', '()()()']));
assert.deepEqual(new Set(generateParenthesis(1)), new Set(['()']));
assert.deepEqual(
    new Set(generateParenthesis(4)),
    new Set([
        '(((())))',
        '((()()))',
        '((())())',
        '((()))()',
        '(()(()))',
        '(()()())',
        '(()())()',
        '(())(())',
        '(())()()',
        '()((()))',
        '()(()())',
        '()(())()',
        '()()(())',
        '()()()()',
    ])
);
console.timeEnd('time');
