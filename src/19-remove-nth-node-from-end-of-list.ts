import {ListNode} from './models/list-node.model';

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

console.log(
    removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)?.toString()
);
