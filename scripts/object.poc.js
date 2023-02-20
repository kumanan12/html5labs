class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName =lastName;
    }

    getFullName(){
        return `${this.firstName}, ${this.lastName}`
    }

    setFirstName(value){
        this.firstName=value;
    }
}



let dhivakar = new Person("Dhivakar", "Manickam");
dhivakar.setFirstName("Monisha")

// let kumanan = new Person("Kumanan", "Murugesan");

console.log(dhivakar.getFullName());
// console.log(kumanan.getFullName());