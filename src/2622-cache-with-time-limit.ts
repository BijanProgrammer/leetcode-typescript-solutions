import {strict as assert} from 'assert';

interface Item {
    value: number;
    duration: number;
    registered: number;
}

class TimeLimitedCache {
    private items: Record<number, Item> = {};

    public set(key: number, value: number, duration: number): boolean {
        const result = !!this.items[key] && !this.isExpired(this.items[key]);
        this.items[key] = {value, duration, registered: +Date.now()};
        return result;
    }

    public get(key: number): number {
        const item = this.items[key];
        if (!item) return -1;
        return this.isExpired(item) ? -1 : item.value;
    }

    public count(): number {
        return Object.values(this.items).filter((item) => !this.isExpired(item)).length;
    }

    private isExpired(item: Item): boolean {
        return +Date.now() - item.registered > item.duration;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

console.time('time');
const obj = new TimeLimitedCache();
assert.equal(obj.set(1, 42, 1000), false);
assert.equal(obj.get(1), 42);
assert.equal(obj.count(), 1);
console.timeEnd('time');
