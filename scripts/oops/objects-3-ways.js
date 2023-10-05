// const person = {
//     name: 'John',
//     age: 30,
//     introduceSelf() {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName= lastName;
}


// const student1 = new Student('Dhivakar', 'Manickam')

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.introduceSelf = function() {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
// };

// Person.prototype.greet = function() {
//     return `Hell Mr ${this.name}`
// }



// const person = new Person('Dhivakar', 22);
// const person2 = new Person('Prema', 25);
// // person2.greet();
// // console.log(person.greet())
// person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceSelf() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Kumanan', 30);
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."