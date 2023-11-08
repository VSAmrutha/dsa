Function.prototype.customBind=function(context={},...args){
    if(typeof this !== 'function'){
       throw new Error(this + "cannot be bound as it is not callable")
    } 
    context.fn=this;
    //...newArgs as we can give argument 
    //while call the bind function after initialize
    return function(...newArgs){
       return context.fn(...args,...newArgs)
    }
   }
   function hello(){
       console.log(this.age,arguments)
   }
   let userBind={
       name:"Amrutha",
       age:31
   }
   let bindfunc=hello.customBind(userBind)
   //arguments can be passed above or when we call bindFunc as well
   //should this into consideration while building customBind
   console.log(bindfunc(0,9))



//function hello(a,b,c){
//    console.log(this,"iamcalled",a,b,c);
//}
//let obj={
//    name:"EPAM"
//}
//Function.prototype.myBind=function(context,...args){
//    context.fn=this;
//    return function(...newargs){
//        return context.fn(...args,...newargs)
//    }
//}
//let p=hello.myBind(obj,1,8)
//p(6)