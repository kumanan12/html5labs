// pangram = A sentence or verse that contains all the letters of the alphabet.
function isPangram(sentence){
    
    const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let inputArray  = sentence.toUpperCase().split("");
    inputArray.forEach(element => {
    //   let index = alphabets.findIndex(function(alpbhabet){
    //     return element === alpbhabet;
    //   });
    let index = alphabets.findIndex( e => {
        return e === alpbhabet
    });
      if (index >=0) {
        alphabets.splice(index,1)
      }
     
    });

    return alphabets.length ===0;
}

let result = isPangram("bcdefghijklmnopqrstuvwxyz");
console.log(result);