var publicName = 'Anyone can see me';
let name = 'Veeshwa';
let student = {
    name: 'Dhivakar',
    age: 22,
    someName: name
}



function hello(params) {
    let person = 'Kumanan'
    console.log('Inside function',name);
    if(params === 'world') {
        var secretName = 'Superman';
        console.log('inside block ',secretName);

    }
    console.log(secretName);

}

// function hello(params) {
//     let person = 'Kumanan';
//     var secretName;
//     console.log('Inside function',name);
//     if(params === 'world') {
//          secretName = 'Superman';
//         console.log('inside block ',secretName);

//     }
//     console.log(secretName);

// }

hello('world');

// console.log(person);



// hello();
// console.log(name, student);

