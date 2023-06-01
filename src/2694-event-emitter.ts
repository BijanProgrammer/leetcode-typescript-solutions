import {strict as assert} from 'assert';

type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void;
};

class EventEmitter {
    private nameToListenersMap: Record<string, Callback[]> = {};

    public subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.nameToListenersMap[eventName]) {
            this.nameToListenersMap[eventName] = [];
        }

        this.nameToListenersMap[eventName].push(callback);

        return {
            unsubscribe: (): undefined => {
                const index = this.nameToListenersMap[eventName].indexOf(callback);
                this.nameToListenersMap[eventName].splice(index, 1);

                return undefined;
            },
        };
    }

    public emit(eventName: string, args: any[] = []): any {
        if (!this.nameToListenersMap[eventName]) {
            return [];
        }

        return this.nameToListenersMap[eventName].map((callback) => callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

console.time('time');

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
    return 99;
}

const sub = emitter.subscribe('onClick', onClickCallback);

assert.deepEqual(emitter.emit('onClick'), [99]);
assert.equal(sub.unsubscribe(), undefined);
assert.deepEqual(emitter.emit('onClick'), []);

console.timeEnd('time');
