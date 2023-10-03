### Object-oriented programming (OOP) is a programming paradigm that uses objects to represent and manipulate data. In JavaScript, objects can be created using 
1. Object literals
2. Constructor functions
3. Classes

## Object literals
```
const person = {
  name: 'John',
  age: 30,
  introduceSelf() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."
```
## Constructor functions
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduceSelf = function() {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

const person = new Person('John', 30);
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."
```

## Class
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduceSelf() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('John', 30);
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."
```

## Inheritance and Composition

> Inheritance is a mechanism where a subclass inherits properties and methods from its superclass. This means that the subclass can use the same methods as its superclass, but can also override those methods with its own implementation. 

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rufus');
dog.speak(); // logs "Rufus barks."

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const cat = new Cog('Tommy');
dog.speak(); // logs "Tommy meows."


```

## Composition

> Composition is a mechanism where an object is composed of other objects. This means that the object can use the properties and methods of its composed objects, but can also provide its own implementation.


```
class Engine {
  start() {
    console.log('Engine started.');
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.start();
    console.log('Car started.');
  }
}

const engine = new Engine();
const car = new Car(engine);
car.start(); // logs "Engine started." and "Car started."
```

## Encapsulation
> Encapsulation is the practice of hiding the internal details of an object and exposing only what is necessary. This is achieved by using access modifiers such as public, private, and protected. In JavaScript, encapsulation can be achieved using closures or classes.
>
```
function Person(name, age) {
    let _name = name; // private variable
    let _age = age; // private variable

    function getAge() { // private method
        return _age;
    }

    return {
        getName() { // public method
            return _name;
        },

        introduceSelf() { // public method
            console.log(`Hi, my name is ${_name} and I am ${getAge()} years old.`);
        }
    };
}

const person = Person('John', 30);
console.log(person.getName()); // logs "John"
person.introduceSelf(); // logs "Hi, my name is John and I am 30 years old."
```