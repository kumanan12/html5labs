
async function getData(){
    const url = 'https://pets-v2.dev-apis.com/breeds?animal=dog';
    const fetchResponse = await fetch(url);
    //now get the actual json data
    const jsonData = await fetchResponse.json();
    console.log(jsonData);
}

getData();