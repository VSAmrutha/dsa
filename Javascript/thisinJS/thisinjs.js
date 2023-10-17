let caluculator={
    read(){
       this.a= +prompt("a=",0);
       this.b= +prompt("b=",0);
        console.log(this.a,this.b)
    },
    sum(){
    return this.a+this.b
    },
    mul(){
   return this.a*this.b
    }
}
caluculator.read();
console.log(caluculator.sum());
console.log(caluculator.mul());
//*********** */
var length=4;
function callback(){
    console.log(this.length)
}
const object={
    length:5,
    method(fn){
        fn();
    }
}

object.method(callback);//4 as callback is passed an an argument
//clear on this as well but when we convert callback into an arrow function, i am expecting output as 5
//which is not the case


//****************** */
//var length=4;
//function callback(){
//    console.log(this.length)
//}
//const object={
//    length:5,
//    method(){
//        //argument=[callback,2,3]
//        arguments[0]()
//    }
//}
//object.method(callback,2,3);//3 arguments is an array 
//which has length property in its prototype (I am clear on this)



//******************** */
let calc={
    total:0,
    add(a){
 this.total=this.total+a ;
 return this
    },
    multiply(a){
    this.total=this.total*a ;
    return this
   },
   substract(a){
    this.total=this.total-a ;
    return this
   },
}
const result=calc.add(10).substract(5).multiply(10).add(50);
console.log(result.total)
//*****************8 */
const animals=[
    {species:'Lion',name:'King'},
    {species:'Whale',name:'Queen'},
];
function printAnimals(i){
    this.print=function(){
        console.log('#'+i+' '+ this.species+' '+this.name);
    };
    this.print();
}
for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i)
}


//************* polyfill apply */
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

   ///************ polyfill for call*/
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


//************Polyfill for Bind */
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