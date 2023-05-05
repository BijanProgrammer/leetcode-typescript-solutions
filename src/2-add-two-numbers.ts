import {strict as assert} from 'assert';
import {ListNode} from './models/list-node.model';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) return null;

    const sum = (l1?.val ?? 0) + (l2?.val ?? 0);
    const currentDigit = sum % 10;

    if (sum >= 10) {
        if (l1 !== null && l1.next !== null) l1.next.val++;
        else if (l2 !== null && l2.next !== null) l2.next.val++;
        else return new ListNode(currentDigit, new ListNode(1));
    }

    return new ListNode(currentDigit, addTwoNumbers(l1?.next ?? null, l2?.next ?? null));
}

console.time('time');

const example1Input1 = ListNode.generateFromArray([2, 4, 3]);
const example1Input2 = ListNode.generateFromArray([5, 6, 4]);
const example1Actual = addTwoNumbers(example1Input1, example1Input2);
const example1Expected = ListNode.generateFromArray([7, 0, 8]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input1 = ListNode.generateFromArray([0]);
const example2Input2 = ListNode.generateFromArray([0]);
const example2Actual = addTwoNumbers(example2Input1, example2Input2);
const example2Expected = ListNode.generateFromArray([0]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Input1 = ListNode.generateFromArray([9, 9, 9, 9, 9, 9, 9]);
const example3Input2 = ListNode.generateFromArray([9, 9, 9, 9]);
const example3Actual = addTwoNumbers(example3Input1, example3Input2);
const example3Expected = ListNode.generateFromArray([8, 9, 9, 9, 0, 0, 0, 1]);
assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
