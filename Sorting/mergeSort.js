function mergeHelper(arr1,arr2){
    let combinedArray=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            combinedArray.push(arr1[i]);
            i++
        }else{
           combinedArray.push(arr2[j]);
            j++ 
        }
    }
    while(i<arr1.length){
        combinedArray.push(arr1[i]);
            i++
    }
     while(j<arr2.length){
        combinedArray.push(arr2[j]);
            j++
    }
    return combinedArray
}

// mergeHelper([1,3,5,8],[2,4,7,9])
// mergeHelper([1],[8])
function mergeSort(arr){
    if(arr.length===1) return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return mergeHelper(left,right)
}
mergeSort([56,3,4,2,8,9,99])
// mergeSort([2,1])