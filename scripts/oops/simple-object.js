const person = {
    name: 'John',
    age: 30,
    introduceSelf() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."