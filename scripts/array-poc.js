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
const array1 = [5, 12, 8, 130, 44];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(sumWithInitial);

  let sum = 0;
  array1.forEach(function(item){
    sum = sum+item;
  });
  console.log(sum);
