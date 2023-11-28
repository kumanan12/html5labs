function sum(numbers, expectedValue, numberOfElements, jumpIndex, i = 0, arrayIndexes = [], currentSum = 0, j = 0) {
    if (i < numbers.length - jumpIndex) {
        if (j < numberOfElements * jumpIndex) {
            arrayIndexes.push(numbers[i + j]);
            currentSum += numbers[i + j];
            return sum(numbers, expectedValue, numberOfElements, jumpIndex, i, arrayIndexes, currentSum, j + jumpIndex);
        } else {
            console.log('Sum ', currentSum);
            if (currentSum == expectedValue) {
                console.log(arrayIndexes.join(','));
                return;
            } else {
                return sum(numbers, expectedValue, numberOfElements, jumpIndex, i + 1);
            }
        }
    }
}

let inputArray = [4, 2, 4, 7, 3];
sum(inputArray, 8, 2, 2);