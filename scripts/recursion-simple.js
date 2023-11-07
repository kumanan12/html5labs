function sumArray(arr, numberOfElements, index = 0, sum =0) {
    if (index === arr.length) {
        return 0;
    } else {
        sum +=arr[index];
        if (numberOfElements ==0 ) {
            return sum;
        }
        return arr[index] + sumArray(arr,numberOfElements-1, index + 1), sum;
    }
}

const inputArray = [1, 2, 3, 4, 5];
console.log(sumArray(inputArray,2)); // Output: 15