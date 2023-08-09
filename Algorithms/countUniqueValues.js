function countUniqueValues(arr){
    let uniqueArr=[];
    let left=0;right=arr.length-1;
    while(left<=right){
        //console.log(uniqueArr.includes(arr[left]))
        //console.log(uniqueArr.includes(arr[right]))
        console.log(left,right)
        if(!uniqueArr.includes(arr[left])){
            uniqueArr.push(arr[left])
            left++
        }
         if(!uniqueArr.includes(arr[right])){
            uniqueArr.push(arr[right])
             right--
        }
        console.log(left,right)
    }
    //console.log("uniqueArr",uniqueArr)
    return uniqueArr
    
}
countUniqueValues([3,5,7,7])