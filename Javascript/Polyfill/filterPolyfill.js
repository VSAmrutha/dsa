let arr=[1,3,6,30,45,2];
Array.prototype.myFilter=function(fn){
    let result=[];
    for(let i=0;i<this.length;i++){
        //always bind the context of this to the function
        let v=fn.call(this,this[i],i,this);
        if(v){
            result.push(v)
        }
    }
    return result
}
let newArr=arr.myFilter(function(value){
    if(value>5){
        return value
    }
})
console.log(newArr)