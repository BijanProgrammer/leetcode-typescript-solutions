import {strict as assert} from 'assert';
import {Node} from './models/node.model';

function cloneGraph(node: Node | null): Node | null {
    const map = new Map<number, Node>();

    const clone = (node: Node | null): Node | null => {
        if (node === null) {
            return null;
        }

        if (map.has(node.val)) {
            return map.get(node.val)!;
        }

        const cloned = new Node(node.val);
        map.set(node.val, cloned);

        node.neighbors.forEach((neighbor) => {
            cloned!.neighbors.push(clone(neighbor)!);
        });

        return cloned;
    };

    return clone(node);
}

console.time('time');

const example1Input1 = Node.generateFromArray([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
]);
const example1Actual = cloneGraph(example1Input1);
const example1Expected = Node.generateFromArray([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
]);
// assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input1 = Node.generateFromArray([[]]);
const example2Actual = cloneGraph(example2Input1);
const example2Expected = Node.generateFromArray([[]]);
// assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Input1 = Node.generateFromArray([]);
const example3Actual = cloneGraph(example3Input1);
const example3Expected = Node.generateFromArray([]);
// assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
