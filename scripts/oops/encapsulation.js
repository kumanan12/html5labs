// function Person(name, age) {
//     let _name = name; // private variable
//     let _age = age; // private variable

//     function getAge() { // private method
//         return _age;
//     }

//     return {
//         getName() { // public method
//             return _name;
//         },

//         introduceSelf() { // public method
//             console.log(`Hi, my name is ${_name} and I am ${getAge()} years old.`);
//         }
//     };
// }

// const person = Person('Kumanan', 50);
// console.log(`Person name is ${person._name}`);
// console.log(person.getName()); // logs "John"
// person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."

class Person {
    #name;
    constructor(name) {
        this.#name = name; // private variable
    }

    introduceSelf() {
        console.log(`Hi, my name is ${this.#name}.`);
    }
}

const person = new Person('John');
// console.log(person.#name); 
person.introduceSelf(); // logs "Hi, my name is John."
