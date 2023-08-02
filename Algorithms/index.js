//sum of all intergers
function medianofArray(arr){
    let median=0
    let mid=Math.floor(arr.length/2)
    console.log(mid)
    let sortedArr=arr.sort((a,b)=>a-b)
    console.log(sortedArr)
    if(arr.length%2 !==0){
        median=sortedArr[mid]
    }else{      
        median=(sortedArr[mid-1]+sortedArr[mid])/2;
    }
    return median
}
console.log(medianofArray([56, 67 ,30, 79]))

