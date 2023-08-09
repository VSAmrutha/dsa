function maxSubarray(arr,num){
    let maxSum=0;tempSum=0;
    if(num>arr.length) return undefined;
    for(let i=0;i<num;i++){
        maxSum += arr[i]
    }
    tempSum=maxSum;
    for(let i=num;i<arr.length;i++){
        tempSum=tempSum-arr[i-num]+arr[i]
        maxSum=Math.max(tempSum,maxSum)
    }
    return maxSum;
}
maxSubarray([2,3,45,4,6,7],3)

//slinding window