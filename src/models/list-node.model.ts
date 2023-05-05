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

    public static generateFromArray(items: number[]): ListNode | null {
        if (items.length <= 0) return null;

        let node: ListNode | null = null;
        for (let i = items.length - 1; i >= 0; i--) {
            node = new ListNode(items[i], node);
        }

        return node;
    }

    public equals(other: ListNode | null): boolean {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let first: ListNode | null = this;
        let second: ListNode | null = other;

        while (first !== null && second !== null && first.val == second.val) {
            first = first.next;
            second = second.next;
        }

        return first == second;
    }

    public toString(): string {
        return `${this.val}${this.next?.toString() ?? ''}`;
    }
}
