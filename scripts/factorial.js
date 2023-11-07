
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  console.log(factorial(5)); // Output: 120

function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    } else {
        return arr[index] + sumArray(arr, index + 1);
    }
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15