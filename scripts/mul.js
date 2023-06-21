function mul(x) {
  return function(y) {
    return function(z){
        return x + y + z;
    }
  }
}

let intermediateFunctiion = mul(2);
let thirdFunction = intermediateFunctiion(3);
console.log(mul(2)(3)(4));