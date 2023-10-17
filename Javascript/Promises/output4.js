//Rewrite th following code with async and await
async function loadJson(url){
    const response=await fetch(url);
    if(response.status==200){
        const data=await response.json();
        return data
    }else{
        throw new Error(response.status)
    }
}
loadJson('https://fakeurl.com/no-such-user.json')
    .catch(err=>console.log(err))