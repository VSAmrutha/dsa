function find(index){
    let a=[]
    for(let i=0;i<100000000;i++){
        a.push(i)
    }
    return function(index){
        return a[index]
    }

}
const closure=find();
console.log(closure(3))
console.log(closure(89))
//*************counter using settimeout */
function counter(){
    for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}
let counterstart=counter();
console.log(counterstart)
//**************8 counter with var is also possible as follows */
function counter(){
    for(var i=0;i<5;i++){
       function inner(i){
          setTimeout(()=>{
            console.log(i)
        },i*1000)
      };
        inner(i)
    }
}
counter();