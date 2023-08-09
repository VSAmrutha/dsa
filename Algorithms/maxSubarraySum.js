function maxSubarraySum(arr,num){
    let max=0;temp=0;
      if(arr.length<num) return null
  for(let i=0;i<num;i++){
      max=max+arr[i]
  }
      temp=max
      for(let i=num;i<arr.length;i++){
         
          temp=temp+arr[i]-arr[i-num]
          max=Math.max(temp,max)
         
      }
      return max
  }
  // maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) //39
  // maxSubarraySum([100,200,300,400], 2) //700
  // maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
  // maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
  maxSubarraySum([2,3], 3) // null