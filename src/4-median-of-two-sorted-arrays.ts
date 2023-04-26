import {strict as assert} from 'assert';

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [];

    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    if (merged.length % 2 === 1) return merged[(merged.length - 1) / 2];
    return (merged[(merged.length - 2) / 2] + merged[merged.length / 2]) / 2;
}

console.time('time');
assert.equal(findMedianSortedArrays([1, 3], [2]), 2);
assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
console.timeEnd('time');
