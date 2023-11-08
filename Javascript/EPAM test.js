const inputArr = ["Peter", "patrick", "John", "david", "Dennis"];
function sorting(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
         let check=arr[i][0].toLowerCase()
        if(!obj[check]){
          obj[check]=[];
          obj[check].push(arr[i])
        }else{
            obj[check].push(arr[i])
        }
        
    }
    return obj
}
console.log(sorting(inputArr))
//-----------------------
//what is the output, i said sum will give error as it is function expression and add will work fine as it function declaration
//even with var sum will throw error
sum();
add()
const sum=()=>{
    console.log("sum")
}
function add(){
        console.log("add")
}
//-----------------------
//what will be the output, i said settimeout then promise but i am wrong, it is promise and then settimeout
//also asked what would be default time it delay is not mentioned for settimeout
setTimeout(()=>{
    console.log("settimeout")
 })
 Promise.resolve(1).then(()=>console.log("Promsie"))
 //------------------------------------
 let user={
    name:"Fred",
    job:{
       title:"Manager"
    }
 }
 let userCopy={...user}
 userCopy.job.title="Engineer"
 userCopy.name="Peter";
 console.log(user.job.title);//Engineer,spread does shallow copy so title will be changed as it nested object
 console.log(userCopy.job.title);//Engineer
 console.log(user.name);//Fred, remains same as it name is not referenced like title as name is not nested deeply
 console.log(userCopy.name);//Peter
 //------------------------------------
 let userDestructure={
    name:"amu",
    age:31,
    college:"sa"
 }
 let {education:degree}=userDestructure
 console.log(degree);//undefined
 console.log(education);//reference error
 //how to assign default value
 let {college="default"}=userDestructure
 console.log(college)
 //--------------------------
 function fn(){
    console.log(x);//undefined-1
    setTimeout(()=>{
       console.log("hello");//hello-3
       x=false
    },0)
    setTimeout(()=>{
       console.log(x);//false-4
      
    },0)
    var x=true;
    if(x){
       console.log("x is true");//x is true-2
    }
 }
 fn();//i am right here
 //-----------------------------
 //find average for IT whose pay is more than 10000
let x2=[
    {name:"Vany",department:"HR",pay:15000},
    {name:"Dave",department:"IT",pay:30000},
    {name:"Kart",department:"IT",pay:15000},
    {name:"Dany",department:"IT",pay:10000},
    {name:"Devi",department:"IT",pay:25000},
 ];
 let data=x2.filter((item)=>(item.department=="IT"&&item.pay>10000));
 console.log(data);
 let average=data.reduce((acc,curr,i)=>{
    console.log(acc,curr,i)
    acc=(acc+curr.pay)/(i+1);
    return acc
 },0)
 console.log(average);
 //questions
 // If id we give color red and class we give blue for same element, what would be taken
 //explain error boundaries in react
 //security and also what to do to prevent XSS
 //explain all hooks
 //where you used custom hooks
 //performance of react app
 //how to know the speed of react app, so i started with lighthouse
 //accessibilty
 // how to add a function to an Array Class, i answerd "Array.prototype.abc=function(){}"
 //she asked to correct react code, it was adding name as dependency to the useeffect
 //explain Promise.all(),Promise.allSettled(),Promise.any(),Promise.race()
 //what is prototypal inheritance, did not answer well