function sumZero(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
}
sumZero([-5,-3,0,1,2]) // undefined
sumZero([-2,-3,0,1,2]) //[-2,2]
//time complexity is O(N) and space complexity O(1)