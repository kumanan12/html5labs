// const person = {
//     name: 'John',
//     age: 30,
//     introduceSelf() {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduceSelf = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

const person = new Person('John', 30);
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduceSelf() {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person = new Person('John', 30);
// person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."