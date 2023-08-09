let fetchPromise=new Promise((resolve,reject)=>{
    let a=false;
    setTimeout(()=>{
        resolve("success")
    },3000)
    if(a){
       
    }else{
        reject("error")
    }
})
fetchPromise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})