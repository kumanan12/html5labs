 let listOfFriendsNames = ["rams","ice","santhia","kums"];


// const result = listOfFriendsNames.filter((word) => word.length == 4);
// console.log("My Friends are: ", result);


// without using array method
//-------------------------------------------------------------------

// let finalListOfFriends = [];

// for (let i=0;i < listOfFriendsNames.length;i++){
//     let name = listOfFriendsNames[i];
//     if(name.length == 4){
//     finalListOfFriends.push(name);
//     }
// }


function findFriends (listOfFriends) {
    let finalListOfFriends = [];
    for (let i=0;i < listOfFriends.length;i++){
        let name = listOfFriends[i];
        if(name.length == 4){
        finalListOfFriends.push(name);
        }
    }
  return finalListOfFriends;  
}

let myFriends = findFriends(listOfFriendsNames);
let otherFriends = findFriends(['Prem1', 'Savi1', 'rajesjh', 'vijay'])
console.log(otherFriends);