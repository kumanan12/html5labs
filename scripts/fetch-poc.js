function onJsonDataReceived(data){
  console.log(data);
 }

function onFetchReturned(response){
  let jsonPromise = response.json();
  jsonPromise.then(onJsonDataReceived)
}

// fetch get
const url = 'https://pets-v2.dev-apis.com/breeds?animal=dog';

const fetchPromise =fetch(url);

fetchPromise.then(onFetchReturned)


// fetch('https://pets-v2.dev-apis.com/breeds?animal=dog')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


//   //fetch post
//   fetch('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     key: 'value'
//   })
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
