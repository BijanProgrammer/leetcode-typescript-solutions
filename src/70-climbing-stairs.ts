import {strict as assert} from 'assert';

const memo = new Map<number, number>();

function climbStairs(n: number): number {
    if (n <= 2) return n;

    if (memo.has(n)) return memo.get(n)!;

    const result = climbStairs(n - 1) + climbStairs(n - 2);
    memo.set(n, result);

    return result;
}

console.time('time');
assert.equal(climbStairs(2), 2);
assert.equal(climbStairs(3), 3);
console.timeEnd('time');
