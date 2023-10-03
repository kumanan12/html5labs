# JavaScript Terminologies

## Closure 
> A Closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned. This means that a closure can "remember" the values of its outer variables and use them later
 ```
 function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // logs "I am from the outer function"

```
## Practical Closure example : Counter
```
function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const incrementCount = counter();
incrementCount(); // logs 1
incrementCount(); // logs 2
incrementCount(); // logs 3
```