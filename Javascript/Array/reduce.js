//use case 1
const arr=[3,5,7,8]
let x=arr.reduce(((acc,number)=>acc+number),0)
console.log(x)
//use case 2
const materials=[
    {name:"Brick",cost:3000},
    {name:"Plaster",cost:1000},
    {name:"Wood",cost:5000},
    
]
let y=materials.reduce(((prev,material)=>prev+material.cost),0)
console.log(y)
//use case 3
const keyValuePairs=[
    ["username","dcode"],
    ["membersince","2020-04-16"],
    ["age",31]
]
const l=keyValuePairs.reduce(((prev,item)=>{
    const key=item[0];
    const value=item[1];
    prev[key]=value;
    return prev
}),{})
console.log(l)
//use case 4
const people=[
    {name:"Amu",occupation:"Software Developer",salary:"250000"},
    {name:"Anvi",occupation:"Software Developer",salary:"150000"},
    {name:"Anek",occupation:"Software Developer",salary:"100000"},
]
// works similar to Math.max method
const m=people.reduce(((prev,item)=>{
    if(item.salary>prev){
        return item.salary
    }
    return prev
}),0)
console.log(m)
//use case 5
const colors=["green","green","red","blue","red","red"]
const a=colors.reduce(((acc,item)=>{
    
    acc[item]=(acc[item] || 0)+1
    return acc
}),{})
console.log(a)
//---------------------
//Remove duplicates in an array
let x1=[1,2,3,4,3,5,2,5,6,6]
let y1=x1.reduce((acc,curr)=>{
   if(!acc.includes(curr)){
      acc.push(curr)
   }
   return acc
},[])
console.log(y1)
//Grouping objects by a property
const result = [
   {subject: 'Physics', marks: 41},
   {subject: 'Chemistry', marks: 59},
   {subject: 'Pure Maths', marks: 36},
   {subject: 'Applied Maths', marks: 90},
   {subject: 'English', marks: 64},
];

let initialValue = {
   pass: [], 
   fail: []
}

const groupedResult =result.reduce((acc,curr)=>{
   if(curr.marks>50){
      acc.pass.push(curr)
   }else{
      acc.fail.push(curr)
   }
   return acc

},initialValue)
console.log("groupedResult",groupedResult)
//Flatten an array of arrays
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((acc,curr)=>acc.concat(curr),[])
console.log("oneDArr",oneDArr)
// Sum of values in an object array
const studentResult = [
   { subject: 'Maths', marks: 78 },
   { subject: 'Physics', marks: 80 },
   { subject: 'Chemistry', marks: 93 }
];

const total = studentResult.reduce((acc,curr)=>{
  return acc+curr.marks
},0);
console.log("total",total)
// Generic: Sum all the values of an array
const studentResults = [67, 90, 100, 37, 60];
const totals = studentResult.reduce((accumulator, currentValue) => accumulator +currentValue, 0);
console.log(totals);
//Counting Occurrences of Items
const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
const occurrences=fruits.reduce((acc,curr)=>{
      if(acc[curr]){
         acc[curr]=acc[curr]+1
      }else{
         acc[curr]=1
      }
      return acc
},{});
console.log("occurrences",occurrences)
// using spread operator
//const occurrences = fruits.reduce((acc, currFruit) => {
//   return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
//}, {})

//Converting Between Types
const students = [
   { name: "Kingsley", score: 70 },
   { name: "Jack", score: 80 },
   { name: "Joe", score: 63 },
   { name: "Beth", score: 75 },
   { name: "Kareem", score: 59 },
   { name: "Sarah", score: 93 }
]
const names = students.reduce((acc, student) => [...acc, student.name], [])
console.log(names)
//Getting Max and Min Values
const max = students.reduce((acc, student) => {
   if(acc === null || student.score > acc) 
       return student.score
   return acc
}, null)
console.log(max) 