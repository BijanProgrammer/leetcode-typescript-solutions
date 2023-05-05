import {strict as assert} from 'assert';
import {ListNode} from './models/list-node.model';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length <= 0) return null;
    if (lists.length === 1) return lists[0];

    const middleIndex = lists.length / 2;
    const left = mergeKLists(lists.slice(0, middleIndex));
    const right = mergeKLists(lists.slice(middleIndex));

    return mergeTwoLists(left, right);
}

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

const example1Inputs: Array<ListNode | null> = [
    ListNode.generateFromArray([1, 4, 5]),
    ListNode.generateFromArray([1, 3, 4]),
    ListNode.generateFromArray([2, 6]),
];
const example1Actual = mergeKLists(example1Inputs);
const example1Expected = ListNode.generateFromArray([1, 1, 2, 3, 4, 4, 5, 6]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Inputs: Array<ListNode | null> = [];
const example2Actual = mergeKLists(example2Inputs);
const example2Expected = ListNode.generateFromArray([]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

const example3Inputs: Array<ListNode | null> = [ListNode.generateFromArray([])];
const example3Actual = mergeKLists(example3Inputs);
const example3Expected = ListNode.generateFromArray([]);
assert.equal((example3Actual == null && example3Expected == null) || example3Actual?.equals(example3Expected), true);

console.timeEnd('time');
