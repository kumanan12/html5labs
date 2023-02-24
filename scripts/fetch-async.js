const url = 'https://pets-v2.dev-apis.com/breeds?animal=dog';

function add(n1,n2){
    return new Promise((resolve) =>{resolve(n1+n2)}, (reject)=>{})
    // return new Promise(resolve, reject) => function(){
    //     resolve(n1+n2)
    // };
}

 function getData() {
    let result = await add(2,3);
    console.log(result);
}

// async function getData() {
//     console.log('step1');
//     let response =  await fetch(url);
//     let data =  await response.json();
//     console.log(data);
//     console.log('step2');
// }

getData();
