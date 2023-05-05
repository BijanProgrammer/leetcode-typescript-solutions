import {ListNode} from './models/list-node.model';
import {strict as assert} from 'assert';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

console.time('time');

const example1Input1 = ListNode.generateFromArray([1, 2, 4]);
const example1Input2 = ListNode.generateFromArray([1, 3, 4]);
const example1Actual = mergeTwoLists(example1Input1, example1Input2);
const example1Expected = ListNode.generateFromArray([1, 1, 2, 3, 4, 4]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input1 = ListNode.generateFromArray([]);
const example2Input2 = ListNode.generateFromArray([]);
const example2Actual = mergeTwoLists(example2Input1, example2Input2);
const example2Expected = ListNode.generateFromArray([]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Input1 = ListNode.generateFromArray([]);
const example3Input2 = ListNode.generateFromArray([0]);
const example3Actual = mergeTwoLists(example3Input1, example3Input2);
const example3Expected = ListNode.generateFromArray([0]);
assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
