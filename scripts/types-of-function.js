//1. Using default method parameters
function add(n1 ,n2) {
    return n1 + n2;
}

//2. Anonymous function
let multiply = function (n1,n2){ 
    return n1*n2
};

// console.log(xyz(2,3));

console.log(multiply(12,3));

//3. Arrow function
let multiply2 =  (n1,n2) => {
    return  n1*n2;
} 
console.log(multiply2(12,12));
// //4. Callback function
// let marks = [75, 82, 78, 91, 84];
// marks.forEach(mark => console.log(`${mark} is a good score`  ));  //arrow function

