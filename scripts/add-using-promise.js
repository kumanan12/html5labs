function add(n1,n2){
  return n1+n2;
}

function onSuccess(data) {
  console.log('success ', data);
}

function onFailure(error) {
  console.error('Failed ', error);
}



function addUsingPromise(n1,n2) {
  return new Promise(function(resolve, reject){
    if (typeof n1 === 'string' || typeof n2 === 'string') {
      reject('only numeric values')
    } 
    let result = n1+n2;
     resolve(result);
     
  });
}

let result = addUsingPromise(2,"3");
result.then(onSuccess, onFailure);



