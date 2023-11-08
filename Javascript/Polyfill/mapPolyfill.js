let arr=[1,2,3];
Array.prototype.myMap = function(fn) {
    let newarr=[]
    for(let i=0;i<this.length;i++){
        let v=fn.call(this,this[i],i,this);
        newarr.push(v)
    }
    return newarr;   
}
let mulby2=arr.myMap((value,index,array)=>{
    return value*2
})
console.log(mulby2)