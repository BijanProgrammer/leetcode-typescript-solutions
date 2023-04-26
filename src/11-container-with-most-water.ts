import {strict as assert} from 'assert';

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let result = Math.min(height[left], height[right]) * (right - left);

    let maximumHeightLeft = -1;
    let maximumHeightRight = -1;

    while (left < right) {
        if (height[left] < height[right]) {
            left++;

            if (height[left] < maximumHeightLeft) continue;
            maximumHeightLeft = height[left];
        } else {
            right--;

            if (height[right] < maximumHeightRight) continue;
            maximumHeightRight = height[right];
        }

        const currentVolume = Math.min(height[left], height[right]) * (right - left);
        if (result < currentVolume) result = currentVolume;
    }

    return result;
}

console.time('time');
assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.equal(maxArea([1, 1]), 1);
console.timeEnd('time');
