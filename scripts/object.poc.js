// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName =lastName;
//     }

//     getFullName(){
//         return `${this.firstName}, ${this.lastName}`
//     }

//     setFirstName(value){
//         this.firstName=value;
//     }
// }

function add(n1,n2){
    return n1+n2;
}
  
let result = add(2,3);
console.log(result);
let calculator = {
    name: "calculator",
    isfree: true,
    add: function(n1,n2){return n1 + n2},
    subtract: function(n1,n2){return n1 - n2},
    multiply: function(n1,n2){return n1 * n2},
    divide: function(n1,n2){return n1 / n2},
}

result = calculator.add(2,5);
console.log(result);
// functtion and method 
//q what is the difference between function and method
//a function is a block of code that can be called by its name
//a method is a function that is associated with an object


// let dhivakar = new Person("Dhivakar", "Manickam");
// dhivakar.setFirstName("Monisha")

// // let kumanan = new Person("Kumanan", "Murugesan");

// console.log(dhivakar.getFullName());
// // console.log(kumanan.getFullName());

//principle $10000
//interest 10%
//number of years 5


