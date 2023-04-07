
let person = {
    name: "Krrithik",
    age: 18,
    hasGirlFirend: false,
    getFullDetails() {
        // return 'Name: ' + this.name +
        // ' age: ' + this.age + 
        // ' hasGirlFriend: ' + this.hasGirlFirend
        return `Name: ${this.name}, age: ${this.age},hasGirlFriend: ${this.hasGirlFirend}`;
    }

};

function add(n1,n2) {
    return n1 + n2;
}

let result = add(2,3);



const person1 = person;

console.log(person1.getFullDetails());

// console.log(person.name, person.age, person.hasGirlFirend);

// const me = {
//     name: {
//       first: "Brian",
//       last: "Holt",
//     },
//     location: {
//       streetNumber: 500,
//       street: "Fakestreet",
//       city: "Seattle",
//       state: "WA",
//       zipCode: 55555,
//       country: "USA",
//     },
//     getAddress() {
//       return `${this.name.first} ${this.name.last}
//   ${this.location.streetNumber} ${this.location.street}
//   ${this.location.city}, ${this.location.state} ${this.location.zipCode}
//   ${this.location.country}`;
//     },
//   };
  
//   console.log(me.getAddress());