import {strict as assert} from 'assert';

function coinChange(coins: number[], amount: number): number {
    const dp: number[] = Array(amount + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
}

console.time('time');
assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
assert.equal(coinChange([186, 419, 83, 408], 6249), 20);
console.timeEnd('time');
