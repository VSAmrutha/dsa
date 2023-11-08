let obj={
    start:0,
    end:10,
    [Symbol.iterator](){
        return{  
          next(){
                if(obj.start<obj.end){
                     return {value:obj.start++,done:false}
                }else{
                    return {value:undefined,done:true}
                }
            }}
    }
 }
 //prints 0 to 9
 let count=obj[Symbol.iterator]();
 console.log(count.next())
 for(let i of obj){
    console.log(i)
 }