#### What is promise?
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. In other words, a Promise represents a value that may not be available yet and provides a way to register callbacks to be notified when the value is ready.

A Promise has a .then() method that takes two functions as arguments: the first function is called when the Promise is resolved (i.e., when the asynchronous operation has succeeded), and the second function is called when the Promise is rejected (i.e., when the asynchronous operation has failed).

```
// creating a function that returns a promise.
const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('The operation was successful');
    }, 1000);
  });
};

myAsyncFunction()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

```
### What is async await?
`async/await` is a more modern and readable way of writing asynchronous code in JavaScript, compared to the traditional callback-based approach or the Promise-based approach. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a Promise to be resolved.
```
const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('The operation was successful');
    }, 1000);
  });
};

async function run() {
  try {
    const result = await myAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
```
