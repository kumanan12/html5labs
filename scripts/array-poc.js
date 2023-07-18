// var breakfast = ["coffee", "croissant", "idly" , "dosa"];

// console.log(breakfast.length);




// var array1Length = array1.length;

// const found = array1.filter(element => element > 10);
// function isGreaterThanTen(number) {
//     return number > 10;
// }

// const isGreaterThanTen = element => element > 10;
// const found = array1.filter(isGreaterThanTen);
// console.log(found);
const marks = [75, 82, 78, 91, 84];

const len = marks.length;
// access elements in an array;
const firstElement = marks[0];


const initialValue = 0;
const sumWithInitial = marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(sumWithInitial);

  let sum = 0;
  marks.forEach(function(item){
    sum = sum+item;
  });
  console.log(sum);

  x = ""
 