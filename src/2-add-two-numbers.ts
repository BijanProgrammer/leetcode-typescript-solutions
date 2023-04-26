/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;

    public constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    public toString(): string {
        return `${this.val}${this.next?.toString() ?? ''}`;
    }
}

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

const example1List1: ListNode = new ListNode(2, new ListNode(4, new ListNode(3)));
const example1List2: ListNode = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(example1List1, example1List2)?.toString());

const example2List1: ListNode = new ListNode(0);
const example2List2: ListNode = new ListNode(0);
console.log(addTwoNumbers(example2List1, example2List2)?.toString());

const example3List1: ListNode = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
);
const example3List2: ListNode = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(example3List1, example3List2)?.toString());
