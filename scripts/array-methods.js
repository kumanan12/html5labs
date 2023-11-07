const tourists = [18,23,24,16,15,];

function isOver18(age) {
    console.log(age);
    return age >= 18;
}

function add(a,b){
    return a+b;
}






function isOver25(age) {    
    return age >= 25;
}

const isOver25V2 = age => age >= 25;

const isAnyOneOver25 = tourists.some( isOver25V2);
 console.log(isAnyOneOver25); // false

// let arrayToFill = [1,2,3,4,5,6,7,8,9,10];
// arrayToFill.fill(3, 2, 5);
// console.log(arrayToFill); 

const students = [ 
    {name: 'John', age: 17}, 
    {name: 'Jane', age: 18},
    {name: 'Jack', age: 15},
    {name: 'Kim', age: 18}
 ];

//  function isNameAndAgeMatch(student){
//     return student.name.startsWith('J')  && student.age > 16;
//  }

const isMatch = student => student.name.startsWith('J')  && student.age > 16;

const filteredstudents = students.filter(isMatch);
console.log(filteredstudents);