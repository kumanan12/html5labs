//[1,2,3,4,5,6,7,8,9,0]  => returns "(123) 456-7890"
function createPhoneNumber(numbers){
    //check for length
  
   if (!Array.isArray(numbers)) {
        throw new Error("Only arrays of length 10 allowed")
   }
    if (numbers.length!=10) {
        throw new Error("Only ten numbers are allowed");
    }
    console.log("string length ");
    let first3Chars = numbers.slice(0,3).join("");
    let second3Chars = numbers.slice(3,6).join("");
    let third3Chars = numbers.slice(6).join("");
    //output+=first3Chars+") "+second3Chars+"-"+third3Chars
    let output= `(${first3Chars}) ${second3Chars}-${third3Chars}`;
    console.log(output);
}

// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
try {
    // createPhoneNumber("kkk");
    createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
    console.log("next line");
    
} catch (error) {
    console.error(error);
}
