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