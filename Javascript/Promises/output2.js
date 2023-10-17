function job(state){
    return new Promise((resolve,reject)=>{
        if(state){resolve("success")
        }else{reject("error")}
    })}
let promise=job(true);
promise.then(function(data){
    console.log(data); // success
    return job(true)
}).then(function(data){
    if(data!=="victory"){
        throw "Defeat";//goes to next catch block
    }
    return job(true)
}).then(function(data){
    console.log(data); 
}).catch(function(error){
    console.log(error); //Defeat
    return job(false)
}).then(function(data){
    console.log(data); 
    return job(true)
}).catch(function(error){ 
    console.log(error);//error
    return "error caught"; 
}).then(function(data){
    console.log(data); //error caught
    return new Error("test")
}).then(function(data){
    console.log("success",data.message); //success test
}).catch(function(data){
    console.log("error",data.message); 
});