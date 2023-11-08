let arr=[1,2,3];
Array.prototype.myReduce = function(fn,initialValue){
    let total=initialValue;
    for(let i=0;i<this.length;i++){
       if(total!==undefined){
        //reduce callback takes 4 args, total,current,index,array
        // (index and array are optional)
            total= fn.call(undefined,total,this[i],i,this)
       }else{
           total=this[i]
       }  
    }
    return total
}
let accumulator=arr.myReduce((acc,curr)=>{
    return acc+curr
},0)
console.log(accumulator)