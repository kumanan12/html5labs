var breakfast = ["coffee", "croissant", "idly" , "dosa"];

// console.log(breakfast.length);
function add(n1,n2){
  return n1+n2;
}

// let multiply = function (n1,n2){ return n1*n2};
let multiply =  (n1,n2) => n1*n2;

console.log(multiply(12,3));


const marks = [75, 82, 78, 91, 84];

function print(item){
  console.log(item);
}

// marks.forEach(mark => console.log(`${mark} is a good score`  ));  //arrow function

marks.forEach(function (item){
  console.log(`${item} is a good score`);
});

// marks.forEach(print);
// const len = marks.length;
// // access elements in an array;
// const firstElement = marks[0];


// const initialValue = 0;
// const sumWithInitial = marks.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );

//   console.log(sumWithInitial);

//   let sum = 0;
//   marks.forEach(function(item){
//     sum = sum+item;
//   });
//   console.log(sum);

//   x = ""
 