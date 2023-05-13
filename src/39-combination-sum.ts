import {strict as assert} from 'assert';

function combinationSum(candidates: number[], target: number): number[][] {
    const answers: number[][] = [];

    const findAnswers = (availableCandidates: number[], currentCombination: number[], currentSum: number): void => {
        if (currentSum === target) {
            answers.push(currentCombination);
            return;
        }

        if (currentSum > target || availableCandidates.length === 0) {
            return;
        }

        findAnswers(
            availableCandidates,
            [...currentCombination, availableCandidates[0]],
            currentSum + availableCandidates[0]
        );

        findAnswers(availableCandidates.slice(1), currentCombination, currentSum);
    };

    findAnswers(candidates, [], 0);

    return answers;
}

console.time('time');
assert.deepEqual(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
assert.deepEqual(combinationSum([2, 3, 5], 8), [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
]);
assert.deepEqual(combinationSum([2], 1), []);
console.timeEnd('time');
