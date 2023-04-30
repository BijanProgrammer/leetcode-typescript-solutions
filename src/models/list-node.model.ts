/**
 * Definition for singly-linked list.
 */
export class ListNode {
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
