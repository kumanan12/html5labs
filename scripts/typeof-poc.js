function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}


const p1 = new Person("Kumanan", "Murugesan");
const p2 = new Person("Dhivakar", "Manikkam");

console.log(p2.getFullName());

console.log(typeof Person);


class Employee {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const e1 = new Employee("Kumanan", "Murugesan");
console.log(e1.getFullName());