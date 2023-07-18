function add(n1,n2){
    return n1+n2;
  }
  
function longAddOld(n1, n2) {
    for (var i = 0; i < 10000000; i++) {
        
    }
    return n1+n2;
}

function longAdd(n1, n2) {
    return new Promise(function(resolve, reject){
        for (var i = 0; i < 1000000; i++) {
        
        }
        if(typeof(n1) !== 'number' || typeof(n2) !== 'number'){
            reject('only numerical values are allowed')
        }
        resolve(n1+n2);
    });
}

function onSucess(data){
    console.log(`the promise result is ${data}`);
}

function onFailure(err){
    console.error(err);
}

function domTest(){
    document.getElementById('n1').value="23";
}
domTest();
let longAddResult= longAdd(2,3);
let simpleAddResult = add(3,4);
longAddResult.then(onSucess, onFailure);
// longAddResult.catch()
console.log(simpleAddResult);

