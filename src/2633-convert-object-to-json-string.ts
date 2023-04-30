import {strict as assert} from 'assert';

function jsonStringify(object: any): string {
    if (object === null) return 'null';

    switch (typeof object) {
        case 'string':
            return `"${object.toString()}"`;
        case 'number':
        case 'boolean':
            return object.toString();
        case 'object': {
            if (Array.isArray(object)) {
                const items = object.map((x) => jsonStringify(x));
                return `[${items.join(',')}]`;
            }

            const keys = Object.keys(object);
            const items = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
            return `{${items.join(',')}}`;
        }
    }

    throw new Error('NOT SUPPORTED!');
}

console.time('time');
assert.equal(jsonStringify({y: 1, x: 2}), `{"y":1,"x":2}`);
assert.equal(jsonStringify({a: 'str', b: -12, c: true, d: null}), `{"a":"str","b":-12,"c":true,"d":null}`);
assert.equal(jsonStringify({key: {a: 1, b: [{}, null, 'Hello']}}), `{"key":{"a":1,"b":[{},null,"Hello"]}}`);
assert.equal(jsonStringify(true), `true`);
console.timeEnd('time');
