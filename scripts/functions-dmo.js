/*
1. Function delaration
2. Function call
3. Parameters
4. 
*/
function add(n1 , n2=10) {
    return n1 + n2;
}

let result = add(2,7);

console.log(result);

function greeting(name, salutation = 'Mr',) {
    return `Hello ${salutation} ${name}`;
}

let result1 = greeting('Kumanan', "Master");
console.log(result1);
