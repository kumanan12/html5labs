// function sumArray(arr, numberOfElements, index,expectedValue , sum) {
//     if (index < numberOfElements) {
//         sum += arr[index] ;
//         sumArray(arr, numberOfElements, index+1, expectedValue, sum);
//     }else{
//         if (sum == expectedValue) {
//             return sum;
//         }
//     }
   
// }

// const inputArray = [1, 2, 3, 4, 5];
// console.log(sumArray(inputArray,2, 0, 5, 0)); // Output: 15

function sumArray(arr, numberOfElements, index,expectedValue , sum, startingIndex) {
    if (index < arr.length ) {
        if (numberOfElements >=1) {
            sum += arr[index] ;
            sumArray(arr, numberOfElements-1, index+1, expectedValue, sum, startingIndex);    
        }else{
            if (sum == expectedValue) {
                //console.log(`sm is ${sum}`);
                return sum;
            }else {
                
                sum = 0;
                numberOfElements =2;
                sumArray(arr, numberOfElements, startingIndex+1, expectedValue,sum, startingIndex+1);
            }
        }
    }
    
   
}

const inputArray = [1, 2, 3, 4, 5];
let result = sumArray(inputArray,2, 0, 5, 0, 0);
console.log(result); // Output: 15