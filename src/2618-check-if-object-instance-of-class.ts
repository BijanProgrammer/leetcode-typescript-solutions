import {strict as assert} from 'assert';

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj == null || typeof obj == null || typeof classFunction !== 'function') return false;
    return Object(obj) instanceof classFunction;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

console.time('time');
assert.equal(checkIfInstanceOf(new Date(), Date), true);
assert.equal(checkIfInstanceOf({}, Date), false);
assert.equal(checkIfInstanceOf(23, Date), false);
assert.equal(checkIfInstanceOf(23, Number), true);
assert.equal(checkIfInstanceOf(false, Boolean), true);
assert.equal(checkIfInstanceOf([], Array), true);
assert.equal(checkIfInstanceOf(null, null), false);
assert.equal(checkIfInstanceOf(0, Object), true);
assert.equal(
    (() => {
        function Container(this: any, value: any) {
            this.value = value;
        }
        function Box(this: any, value: any) {
            this.value = value;
        }
        const b = new (Container as any)(1);
        return checkIfInstanceOf(b, Box);
    })(),
    false
);
assert.equal(
    (() => {
        class Animal {}
        class Dog extends Animal {}
        return checkIfInstanceOf(new Dog(), Animal);
    })(),
    true
);
console.timeEnd('time');
