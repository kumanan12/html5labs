function add(n1,n2){
  return n1+n2;
}



function addUsingPromise(n1,n2) {
  return new Promise(function(resolve, reject){
    if (typeof n1 === 'string') {
      reject('only numeric values')
    } 
    let result = n1+n2;
     resolve(result);
     
  });
}


function longFunction(){
  for (let i = 0; i < 10000000000; i++) {
    
    
  }
  console.log('long function done');
}

function longFunctionUsingPromise(){
  return new Promise(function(resolve, reject){
    for (let i = 0; i < 1000000000; i++) {
    
    
    }
    resolve("long function with promise done")
  })
  
}



