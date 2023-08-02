//sum of all intergers
function sumofArray(arr){
    let res=arr.reduce((accumulator,current)=>{
        return accumulator+current
    },0)
    console.log(res)
}
console.log(sumofArray([1,2,3,4,5]))

