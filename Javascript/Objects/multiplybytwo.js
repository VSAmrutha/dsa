let nums={a:100,b:200,title:"my nums"}
multiplyByTwo(nums)
function multiplyByTwo(obj){
    for(let key in obj){
      if(typeof obj[key]==="number"){
          obj[key] =obj[key]*2
      } 
    }
}
console.log(nums)