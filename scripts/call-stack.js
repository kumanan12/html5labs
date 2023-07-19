function firstFunc(){
    setTimeout(() =>{
        console.log("first");
    },3000);
}

function secondFunc(){
    for (var i = 0; i < 1000000; i++) {
        
    }
    console.log("second");
}

function thirdFunc(){
    console.log("third");
};

firstFunc();
secondFunc();
thirdFunc();