function sumArray(arr, numberOfElements, index, expectedValue, sum, startingIndex, arrayValues) {
    if (index < arr.length) {
        if (numberOfElements >= 1) {
            arrayValues.push(arr[index])
            sum += arr[index];
            return sumArray(arr, numberOfElements - 1, index + 1, expectedValue, sum, startingIndex, arrayValues);
        } else {
            if (sum == expectedValue) {
                //console.log(`sum is ${sum}`);
                return arrayValues.join(",");
            } else {
                sum = 0;
                numberOfElements = 2;
                return sumArray(arr, numberOfElements, startingIndex + 1, expectedValue, sum, startingIndex + 1,[]);
            }
        }
    } else {
        // Add a return statement here to handle the case where index >= arr.length
        return sum;
    }
}

const inputArray = [1, 2, 3, 4, 5];
let result = sumArray(inputArray,2, 0, 7, 0, 0,[]);
console.log(result); // Output: 15