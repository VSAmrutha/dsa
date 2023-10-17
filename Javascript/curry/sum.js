//sum(1)(3)(5)
function sum(a){
  return function(b){
    return function(c){
      return (a+b+c)
    }
  }
}
//using arrow function
// let suma=(a)=>(b)=>(c)=>a+b+c
sum(1)(3)(5)

//blog
//https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more