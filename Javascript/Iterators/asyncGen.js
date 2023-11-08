//counter with generators
async function * gen(){
    start=0;
    end=10;
    while(start<end){
        await new Promise((resolve,reject)=>setTimeout(()=>resolve(),1000))
       start++;
       yield start
    }
 } 
 (async ()=>{
    for await(let i of gen()){
       console.log(i)
    }
 })()