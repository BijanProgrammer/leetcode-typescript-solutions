import {strict as assert} from 'assert';

function countBits(n: number): number[] {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    const answers = [0, 1];

    for (let i = 2; i <= n; i++) {
        const reference = i - Math.pow(2, Math.floor(Math.log2(i)));
        answers[i] = answers[reference] + 1;
    }

    return answers;
}

console.time('time');
assert.deepEqual(countBits(2), [0, 1, 1]);
assert.deepEqual(countBits(5), [0, 1, 1, 2, 1, 2]);
console.timeEnd('time');
