import {ListNode} from './models/list-node.model';
import {strict as assert} from 'assert';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null;

    let length = 0;
    let node: ListNode | null = head;
    while (node !== null) {
        node = node.next;
        length++;
    }

    if (length === n) return head.next;

    node = head;
    for (let i = 0; i < length - n - 1 && node !== null; i++) {
        node = node.next;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    node.next = node.next.next;

    return head;
}

console.time('time');

const example1Input = ListNode.generateFromArray([1, 2, 3, 4, 5]);
const example1Actual = removeNthFromEnd(example1Input, 2);
const example1Expected = ListNode.generateFromArray([1, 2, 3, 5]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input = ListNode.generateFromArray([1]);
const example2Actual = removeNthFromEnd(example2Input, 1);
const example2Expected = ListNode.generateFromArray([]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Input = ListNode.generateFromArray([1, 2]);
const example3Actual = removeNthFromEnd(example3Input, 1);
const example3Expected = ListNode.generateFromArray([1]);
assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
