// global variable - do not use.
let publicName = 'Anyone can see me';

function greeting(name) {
    console.log(publicName);
    if (name === 'kumanan') {
        // block level scope
        let specialGreeting = 'Mr.'   
    }
    // function level scope
    let welcome = ' Hello ';
    console.log(welcome);
    return specialGreeting + welcome + name; 

}


//  console.log('greeeting ' + welcome);
const result = greeting('kumanan');
console.log(result);