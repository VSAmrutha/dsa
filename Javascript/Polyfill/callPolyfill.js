
Function.prototype.customcall=function(context={},...args){
    if(typeof this !== 'function'){
       throw new Error(this + "Its not callable")
    } 
    context.fn=this;
    context.fn(...args)
   }
   function hello(){
       console.log(this.age,arguments)
   }
   let userCall={
       name:"Amrutha",
       age:31
   }
   console.log(hello.customcall(userCall,0,9))



//simpler form of call without handling edge cases is below


//function hello(a,b){
//    console.log(this,"iamcalled",a,b);
//}
//let obj={
//    name:"EPAM"
//}
//Function.prototype.myCall=function(context,...args){
//    console.log(this);//this would be the function itself
//    context.fn=this;
//    context.fn(...args)
//}
//hello.myCall(obj,1,8)