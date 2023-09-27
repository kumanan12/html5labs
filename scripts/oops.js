
class Person {
    #name;
    constructor(name) {
        this.name = name;
        this.#name = 'private ' + name;
    }

    introduceSelf() {
        console.log(`Hi, my name is ${this.name}. ${this.#name}`);
    }
}

class Student extends Person {
    
    constructor(name, subject) {
        super(name)
        this.name = name;
        this.subject = subject;
    }

    introduceSelf(x,y) {
        // method implementation
        return `Hi, my name is ${this.name} and I study ${this.subject}.`;
    }
}

class Professor extends Person {
    constructor(name, teaches) {
        super(name)
        this.teaches = teaches;
    }

    grade(paper) {
        // method implementation
        if(paper === 'A') {
            return 'Pass';
        } else {
            return 'Fail';
        }
    }

    introduceSelf(x,y,z) {
        // method implementation
        if (x && y && z) {
            return `Hi, my name is ${this.name} and I teach ${this.teaches}. x=${x} y=${y} z=${z}} name =${this.#name}`;
            
        }else{
            super.introduceSelf();
        }

    }
}

let prof = new Professor('Kumanan', 'JavaScript');
console.log(prof.introduceSelf(4,5,6,));

let student = new Student('Kavitha', 'JavaScript');
console.log(student.introduceSelf());
