/**
 * Definition for Node.
 */

export class Node {
    val: number;
    neighbors: Node[];

    public constructor(val?: number, neighbors?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }

    public static generateFromArray(nodesNeighbors: number[][]): Node | null {
        if (nodesNeighbors.length === 0) return null;

        const nodesCount = Math.max(1, ...nodesNeighbors.flat());

        const nodes: Node[] = Array(nodesCount)
            .fill(null)
            .map((_, i) => new Node(i + 1));

        nodesNeighbors.forEach((neighbors, index) => {
            nodes[index].neighbors = neighbors.map((x) => nodes[x - 1]);
        });

        return nodes[0];
    }
}
