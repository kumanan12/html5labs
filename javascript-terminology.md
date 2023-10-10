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

## Callback function
> A Callback function is a function that is passed as an argument to another function and is executed inside that function. The callback function is called back at a later time, usually after some asynchronous operation has completed.

```
function doSomethingAsync(callback) {
  setTimeout(function() {
    const result = 42;
    callback(result);
  }, 1000);
}

function onComplete(msg) {
   console.log(`The result is ${result}`);
}

doSomethingAsync(onComplete);

```
## Promise
> Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future. Promises are used to handle asynchronous operations, such as making HTTP requests or reading files, and provide a way to handle the result of an asynchronous operation when it becomes available.

## A Promise has three states:

Pending: The initial state, before the Promise has been resolved or rejected.

Resolved: The Promise has been resolved, meaning that the asynchronous operation has completed successfully and the result is available.

Rejected: The Promise has been rejected, meaning that the asynchronous operation has failed and an error has occurred.

```
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const result = 42;
    resolve(result);
  }, 1000);
});

promise.then(function(result) {
  console.log(`The result is ${result}`);
}).catch(function(error) {
  console.error(`An error occurred: ${error}`);
});
```
