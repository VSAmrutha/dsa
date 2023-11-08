Function.prototype.customApply=function(context={},args=[]){
    if(typeof this !== 'function'){
       throw new Error(this + "Its not callable")
    } 
    if(!Array.isArray(args)){
       throw new TypeError("Args are not array")
    }
    context.fn=this;
    context.fn(...args)
   }
   function hello(){
       console.log(this.age,arguments)
   }
   let user={
       name:"Amrutha",
       age:31
   }
   console.log(hello.customApply(user,[0,9]))


//function hello(a){
//    console.log(this,"iamcalled",a);
//}
//let obj={
//    name:"EPAM"
//}
//Function.prototype.myApply=function(context,args){
//    context.fn=this;
//    context.fn(args)
//}
//hello.myApply(obj,[1,8])