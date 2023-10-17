function job(state){
    return new Promise((resolve,reject)=>{
        if(state){resolve("success")
        }else{reject("error")}
    })}
let promise=job(true);
promise.then(function(data){
    console.log(data);
    return job(false)
}).catch(function(error){
    console.log(error);
    // passing string so its not a failed 
    //promise so this will be printed in next .then
    return "error caught"
}).then(function(data){
    console.log(data); //error caught
    return job(true)
}).catch(function(error){ //this will be not triggered as 
    //previous job(true) but no then block so execution stops
    console.log(error);
});// output will be success=>error=>error caught