# Array Methods

## 1. Concat
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

## 2. every(): Checks if every element in an array passes a test.
```
const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const result = arr.every(isEven);
console.log(result); // false
```

## 3. filter(): Creates a new array with all elements that pass a test.
```
const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const evenNumbers = arr.filter(isEven);
console.log(evenNumbers); // [2, 4]

```
## 4. find(): Returns the value of the first element in an array that passes a test.
```
const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const firstEvenNumber = arr.find(isEven);
console.log(firstEvenNumber); // 2

```

## 5. forEach(): Calls a function for each element in an array.
```
const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => console.log(num));
// 1
// 2
// 3
// 4
// 5

```

## 6 includes(): Checks if an array includes a certain value.

```
const arr = [1, 2, 3, 4, 5];
const includesThree = arr.includes(3);
console.log(includesThree); // true
```

## 7. indexOf(): Searches an array for a specified value and returns its position.
```
const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3);
console.log(index); // 2
```

## 8. join(): Joins all elements of an array into a string.

```
const arr = [1, 2, 3, 4, 5];
const str = arr.join('-');
console.log(str); // "1-2-3-4-5"
```

## 9. lastIndexOf(): Searches an array for a specified value and returns its last position.

```
const arr = [1, 2, 3, 4, 5, 3];
const index = arr.lastIndexOf(3);
console.log(index); // 5

```
## 10. map(): Creates a new array with the results of calling a function for each element in an array.

```
const arr = [1, 2, 3, 4, 5];
const double = (num) => num * 2;
const doubledNumbers = arr.map(double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```
## 11. pop(): Removes the last element of an array and returns it.
```
const arr = [1, 2, 3, 4, 5];
const lastElement = arr.pop();
console.log(lastElement); // 5
console.log(arr); // [1, 2, 3, 4]
```
## 12. Adds one or more elements to the end
```
const arr = [1, 2, 3, 4];
const newLength = arr.push(5, 6);
console.log(newLength); // 6
console.log(arr); // [1, 2, 3, 4, 5, 6]
```
## 13. Reduces an array to a single value by calling a function for each element and accumulating the result.
```
const arr = [1, 2, 3, 4, 5];
const sum = (accumulator, currentValue) => accumulator + currentValue;
const total = arr.reduce(sum);
console.log(total); // 15
```
## 14. reverse(): Reverses the order of the elements in an array.
```
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

## 15. shift(): Removes the first element of an array and returns it.
```
const arr = [1, 2, 3, 4, 5];
const firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3, 4, 5]
```
## 16. slice(): Returns a portion of an array into a new array.
```
const arr = [1, 2, 3, 4, 5];
const slicedArray = arr.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]
```
## 17. some(): Checks if at least one element in an array passes a test.
```
const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const hasEvenNumber = arr.some(isEven);
console.log(hasEvenNumber); // true
```
## 18. sort(): Sorts the elements of an array.
```
const arr = [3, 1, 4, 2, 5];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]
```
## 19. splice(): Adds or removes elements from an array.
```
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6, 7);
console.log(arr); // [1, 2, 6, 7, 4, 5]
```
## 20. toString(): Converts an array to a string.
```
const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str); // "1,2,3,4,5"
```
## 21. unshift(): Adds one or more elements to the beginning of an array and returns the new length.
```
const arr = [1, 2, 3, 4, 5];
const newLength = arr.unshift(0, -1);
console.log(newLength); // 7
console.log(arr); // [-1, 0, 1, 2, 3, 4, 5]
```


