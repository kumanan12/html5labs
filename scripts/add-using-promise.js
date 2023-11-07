function add(n1,n2){
  return n1+n2;
}

function onSuccess(data) {
  console.log('success ', data);
}

function onFailure(error) {
  console.error('Failed ', error);
}



// function addUsingPromise(n1,n2) {
//   return new Promise(function(resolve, reject){
//     if (typeof n1 === 'string' || typeof n2 === 'string') {
//       reject('only numeric values')
//     } 
//     let result = n1+n2;
//      resolve(result);
     
//   });
// }

async function addUsingPromise(n1,n2) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    throw new Error('Invalid inputs');
  }
  return n1+ n2;
}

async function getBreeds(){
  let url = 'https://dog.ceo/api/breeds/list/all';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function sayHello(){
  //throw 'junk';
  return "Hey";
}

const result1 = await sayHello();
console.log(result1);
 
//getBreeds();

let result = addUsingPromise(2,3);
 console.log(result);
// result.then((data) => console.log(data))
//       .catch((err) => console.error(err.message));



