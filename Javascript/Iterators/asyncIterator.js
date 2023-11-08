let x={
    start:1,end:10,
    [Symbol.asyncIterator](){
        return{
          async next(){
               await new Promise((resolve,reject)=>setTimeout(()=>resolve(),1000));
               if(x.start<x.end){
                   return {value:x.start++,done:false}
               }else{
                    return {value:undefined,done:true}
               }
              
          }  
        }
    }
};
(async ()=>{
    for await(let i of x){
        console.log(i)
    }
})()
