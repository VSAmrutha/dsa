function getDigit(num, i){
    return Math.floor((Math.abs(num)/(Math.pow(10,i)))%10)
}
// getDigit(4567,4)
function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1
}
// digitCount(3243)
function mostDigit(arr){
    let maxDigit=0
    for(let i=0;i<arr.length;i++){
        maxDigit=Math.max(maxDigit,digitCount(arr[i]))
    }
    return maxDigit
}
mostDigit([37432,322,4234,12])
function radixSort(nums){
    
    let maxDigitCount=mostDigit(nums)
   
    for(let k=0;k<maxDigitCount;k++){
         let digitBuckets=Array.from({length:10},()=>[])
        for(let i=0;i<nums.length;i++){
            let currentNum=getDigit(nums[i],k)
            digitBuckets[currentNum].push(nums[i])
        } 
        console.log(digitBuckets)
        nums=[].concat(...digitBuckets)
        console.log(nums)
    }
    return nums
}
radixSort([2,45,2211,2433,342,2155,36,313,1,32,111])