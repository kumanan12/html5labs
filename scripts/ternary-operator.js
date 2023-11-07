let age = 19

// let welcome = (age < 18) ?
//   () => console.log('Hello!') :
//   () => console.log("Greetings!");

const welcome =  (age) =>  (age < 18) ? console.log('Hello!') : console.log("Greetings!");
   



welcome(12);