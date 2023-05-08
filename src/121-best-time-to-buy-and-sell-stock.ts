import {strict as assert} from 'assert';

function maxProfit(prices: number[]): number {
    let maximumProfit = 0;

    let low = 0;
    let high = 1;

    while (high < prices.length) {
        const currentProfit = prices[high] - prices[low];
        if (maximumProfit < currentProfit) {
            maximumProfit = currentProfit;
        }

        if (prices[low] > prices[high]) {
            low = high;
        }

        high++;
    }

    return maximumProfit;
}

console.time('time');
assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
console.timeEnd('time');
