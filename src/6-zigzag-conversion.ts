import {strict as assert} from 'assert';

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    let result = '';

    const distanceBetweenColumns = 2 * (numRows - 1);
    let distanceToMiddleNumber = distanceBetweenColumns;

    for (let leftMostIndex = 0; leftMostIndex < numRows; leftMostIndex++) {
        const isFirstOrLastRow = leftMostIndex === 0 || leftMostIndex === numRows - 1;

        for (
            let currentColumnIndex = leftMostIndex;
            currentColumnIndex < s.length;
            currentColumnIndex += distanceBetweenColumns
        ) {
            result += s[currentColumnIndex];

            if (!isFirstOrLastRow) {
                const middleNumberIndex = currentColumnIndex + distanceToMiddleNumber;
                if (middleNumberIndex < s.length) result += s[middleNumberIndex];
            }
        }

        distanceToMiddleNumber -= 2;
    }

    return result;
}

console.time('time');
assert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
assert.equal(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
assert.equal(convert('A', 1), 'A');
console.timeEnd('time');
