const marks = [85, 92, 93, 91, 95];

function isGreaterThan90(mark){
  return mark > 90;
}
const passedWithDistionction = marks.every(isGreaterThan90);

console.log('passed with distinction', passedWithDistionction);
const menu = ["coffee", "croissant", "idly" , "dosa", "Tea", "Meals", "Sambar rice"];
// breakfast[1] = "poori";
// console.log(breakfast);
// breakfast.push("poori");
const len = menu.length;
// console.log(len);
// console.log(breakfast[len-1]);


// loop though the array (iteration)
// for (let i  = 0; i  < menu.length; i ++) {
//   let menuItem = menu[i];
//   if (menuItem === 'idly' || menuItem === 'coffee') {
//   console.log(menu[i]);  
    
//   }
// }

function add(n1,n2){
  return n1 + n2;
}

function isTeaOrCofee(menuItem){
  return (menuItem === 'idly' || menuItem === 'coffee');
}

const teaAndCoffee = menu.filter(isTeaOrCofee) //immutability

//  console.log(teaAndCoffee);
// console.log(menu.reverse());
// console.log(menu);


//string, number, boolean , undefined, null , symbol
