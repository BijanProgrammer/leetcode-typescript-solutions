import {strict as assert} from 'assert';

declare global {
    interface Function {
        callPolyfill(context: Record<any, any>, ...args: any[]): any;
    }
}

Function.prototype.callPolyfill = function (context, ...args): any {
    return this.bind(context, ...args)();
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

console.time('time');

function tax(this: any, price: number, taxRate: number): string {
    const totalCost = price * (1 + taxRate);
    return `The cost of ${this.item} is ${totalCost}`;
}

assert.equal(tax.callPolyfill({item: 'salad'}, 10, 0.1), 'The cost of salad is 11');

console.timeEnd('time');
