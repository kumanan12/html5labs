/*
1. Function delaration
2. Function call
3. Parameters
4. 
*/
function add(n1 ,n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function print(item) {
    console.log(`You asked me to print ${item}`);
}

const calculator = {
    x: 10,
    add: function(n1,n2){
        return n1+n2;
    } ,
    subtract: subtract,
    multiply: multiply
}

let student = {
    name: 'Kumanan',
    age: 30,
    dob: '1980-01-01',
    marks: [75, 82, 78, 91, 84],
    isStudent: true,
    printFullDetails: function() {
        return `${this.name} is ${this.age} years old and has marks for ${this.marks.length} subjects`
    },
}

 console.log(student.name);
let result = calculator.add(2,7);
let result2 = print('Hello');
let result3 = calculator.subtract(2,2);



// console.log(result, result2, result3);

function greeting(name, salutation = 'Mr',) {
    // return `Hello ${salutation} ${name}`;
    return 'Hello ' + salutation + ' ' + name + '!';
}

let result1 = greeting('Kumanan');
// console.log(result1);

function calculateFutureValue(principal, interestRate, numberOfYears) {
   // A = P(1 + r)^(t)
   let interest = interestRate/100;
    let onePlusInterest = 1 + interest;
    let power = Math.pow(onePlusInterest, numberOfYears);
    let futureValue = principal * power;
    return futureValue;
   
}

console.log(calculateFutureValue(10000, 10, 10));