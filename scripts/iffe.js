 //Immediately invoked function expression
//  (
//     function (){
//         console.log('hello world');
//     }
//  )();


// (
//     function (){
//         console.log('hello world');
//     }
// )();
 
//  (
//     function(n1,n2){
//         console.log(n1+n2);
//     }
//  )(2,13);

//  function add(n1,n2) {
//     return n1 + n2;
// }

function printItem(item){
    if (item) {
        console.log(item)
    }else{
        console.log('no item');
       
    }
}


(
    function () {
        var array = new Array('a', 'b', 'c', 'd', 'e');
        array[10] = 'f';
        delete array[10];
        for (var i = 0; i < array.length; i++) {
           let item=  array[i];
           if (item) {
            console.log(item)
        }else{
            console.log('no item');
           
        }
           
        }
        console.log(array.length);
      }
    
)();


// function add(n1,n2) {
//     return n1 + n2;
// }

// let add = function  (n1,n2) {
//     return n1 + n2;
// }

// let add = (x,y) =>  {
//  console.log(x,y);
//   return  x+y;
// };

// let squared = x => x*x;
// console.log(squared(5));



