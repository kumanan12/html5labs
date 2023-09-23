let name= 'Kumanan';
let age = 30;
let isStudent = true;

let student = {
    name: 'Kumanan',
    age: 30,
    isStudent: true,
    marks: [75, 82, 78, 91, 84],
    printFullDetails: function() {
        this.name = 'Kavitha';
        return `${this.name} is ${this.age} years old and has marks for ${this.marks.length} subjects`
    },
}

class Student {
    constructor(firstName, lastName, dob, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.address = address;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;    
        
    }

    updateName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let student1 = new Student('Kumanan', 'Ramalingam', '1980-01-01', 'Chennai');
let student2 = new Student('Kavitha', 'Kumanan', '1980-01-01', 'Chennai');

console.log(student1);
console.log(student2.getFullName());