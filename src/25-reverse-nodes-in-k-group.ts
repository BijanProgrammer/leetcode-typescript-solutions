import {strict as assert} from 'assert';
import {ListNode} from './models/list-node.model';

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null) return head;

    let lastNodeOfPreviousGroup: ListNode | null = null;
    let firstNodeOfCurrentGroup: ListNode | null = head;

    let isFirstTime = true;

    while (firstNodeOfCurrentGroup !== null) {
        if (isRemainingNodesCountLessThanK(firstNodeOfCurrentGroup, k)) {
            break;
        }

        const {firstNodeOfReversedGroup, lastNodeOfReversedGroup, firstNodeOfNextGroup} = reverseFirstKNodes(
            firstNodeOfCurrentGroup,
            k
        );

        if (isFirstTime) {
            isFirstTime = false;
            head = firstNodeOfReversedGroup;
        } else if (lastNodeOfPreviousGroup) {
            lastNodeOfPreviousGroup.next = firstNodeOfReversedGroup;
        }

        lastNodeOfReversedGroup.next = firstNodeOfNextGroup;

        lastNodeOfPreviousGroup = lastNodeOfReversedGroup;
        firstNodeOfCurrentGroup = firstNodeOfNextGroup;
    }

    return head;
}

function isRemainingNodesCountLessThanK(current: ListNode | null, k: number): boolean {
    let temp: ListNode | null = current;
    let remainingNodesCount = 0;

    while (remainingNodesCount < k && temp !== null) {
        temp = temp.next;
        remainingNodesCount++;
    }

    return remainingNodesCount < k;
}

function reverseFirstKNodes(
    head: ListNode,
    k: number
): {
    firstNodeOfReversedGroup: ListNode | null;
    lastNodeOfReversedGroup: ListNode;
    firstNodeOfNextGroup: ListNode | null;
} {
    let previous: ListNode | null = null;
    let current: ListNode | null = head;
    let next: ListNode | null = null;

    let i = 0;
    while (i < k && current !== null) {
        next = current.next;
        current.next = previous;

        previous = current;
        current = next;

        i++;
    }

    return {
        firstNodeOfReversedGroup: previous,
        lastNodeOfReversedGroup: head,
        firstNodeOfNextGroup: current,
    };
}

console.time('time');

const example1Input = ListNode.generateFromArray([1, 2, 3, 4, 5]);
const example1Actual = reverseKGroup(example1Input, 2);
const example1Expected = ListNode.generateFromArray([2, 1, 4, 3, 5]);
assert.equal((example1Actual == null && example1Expected == null) || example1Actual?.equals(example1Expected), true);

const example2Input = ListNode.generateFromArray([1, 2, 3, 4, 5]);
const example2Actual = reverseKGroup(example2Input, 3);
const example2Expected = ListNode.generateFromArray([3, 2, 1, 4, 5]);
assert.equal((example2Actual == null && example2Expected == null) || example2Actual?.equals(example2Expected), true);

console.timeEnd('time');
