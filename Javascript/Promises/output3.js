//write firstpromise which resolves to give "First"
//write secondpromise which resolves firstpromise
//then resolves secondpromise and 
//pass output to first promise to resolve to get "First"
const firstPromise= new Promise((resolve,reject)=>{
    resolve("First")
})
const secondPromise= new Promise((resolve,reject)=>{
    resolve(firstPromise)
})
secondPromise.then((res)=>{
    return res
}).then((res)=>{
    console.log(res); 
})