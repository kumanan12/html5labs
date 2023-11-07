function sum(numbers, expectedValue, numberOfElements, jumpIndex) {
    let maxLength = numbers.length - jumpIndex;
    console.log('Max length', maxLength);
  
    for (let i = 0; i < maxLength; i++) {
      let sum = numbers[i];
      let arrayIndexes = [];
      arrayIndexes.push(numbers[i]);
  
      for (let j = jumpIndex; j < numberOfElements * jumpIndex;) {
        arrayIndexes.push(numbers[i + j]);
        sum += numbers[i + j];
        j = j + jumpIndex;
      }
      console.log('Sum ', sum);
      
      if (sum == expectedValue) {
        console.log(arrayIndexes.join(','));
        return;
      }
    }
  }
  
  let inputArray = [4, 2, 4, 7, 3];
  
  sum(inputArray, 10, 2, 2);