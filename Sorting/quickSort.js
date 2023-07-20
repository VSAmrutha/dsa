function pivot(arr,pivotIndex=0,endIndex=arr.length-1){
    console.log(arr,pivotIndex,endIndex)
    const swapping=(arr,i,j)=>{
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    let swapIndex=pivotIndex
    for(let i=pivotIndex+1;i<=endIndex;i++){
        if(arr[i]<arr[pivotIndex]){
            swapIndex++
            swapping(arr,i,swapIndex)
        }
    }
    swapping(arr,pivotIndex,swapIndex)
    return swapIndex
    
}
// pivot([4,6,1,7,3,2,5])
function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex=pivot(arr,left,right);
        console.log("pivotinde",pivotIndex,left,right)
        quickSort(arr,left,pivotIndex)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
   
}
quickSort([4,6,1,7,3,2,5])