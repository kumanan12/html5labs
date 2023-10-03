class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
    speak() {
      console.log(`${this.name} barks. The breed is ${this.breed}`);
    }
  }
  
  const dog = new Dog('Rufus', 'Golden Retriever');
  dog.speak(); // logs "Rufus barks."

  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const cat = new Cat('Tommy');
  cat.speak(); // logs "Tommy meows."