import {strict as assert} from 'assert';
import {ListNode} from './models/list-node.model';

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    const newHead = head.next;

    let left: ListNode | null = null;
    let middle: ListNode | null = head;
    let right: ListNode | null = head.next;

    while (middle !== null && right !== null) {
        if (left !== null) {
            left.next = right;
        }

        middle.next = right.next;
        right.next = middle;

        left = middle;
        middle = left.next;
        right = middle?.next ?? null;
    }

    return newHead;
}

console.time('time');

const example1Input = ListNode.generateFromArray([1, 2, 3, 4]);
const example1Actual = swapPairs(example1Input);
const example1Expected = ListNode.generateFromArray([2, 1, 4, 3]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input = ListNode.generateFromArray([]);
const example2Actual = swapPairs(example2Input);
const example2Expected = ListNode.generateFromArray([]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Input = ListNode.generateFromArray([1]);
const example3Actual = swapPairs(example3Input);
const example3Expected = ListNode.generateFromArray([1]);
assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
