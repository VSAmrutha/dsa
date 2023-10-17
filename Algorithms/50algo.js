//max number in the array
function maxNumber(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
let x=[3,6,127,2,88,9]
console.log(maxNumber(x))
// JS approach
let jsMax=Math.max(...x)
console.log(jsMax)
//***************************************************************************** */
//reverse string
function reverse(str){
    if(str.length<=1) return str;
    return str[str.length-1]+reverse(str.slice(0,-1));   
  }
  let s="madam"
  console.log(reverse(s))
  // JS approach to reverse
let jsstr=s.split("").reverse().join("")
console.log(jsstr)
//palidrome
function pali(str){
    return str===reverse(str)
}
console.log(pali(s))
//***************************************************************************** */
//factorial

function factorial(num){
    if(num<=1) return 1;
    return num * factorial(num-1)
}
console.log(factorial(3))
//***************************************************************************** */
//prime
function checkPrime(num){
    if(num<=1){
        return true
    }
   let c=Math.floor(num/2);
   for(let i=2;i<=c;i++){
    if(num%i===0){
        return false
    }
   }
   return true

}
console.log(checkPrime(9))
//***************************************************************************** */
//find the largest element in a nested array
function largestInNested(arr){
    let flatArr=[]
    function flat(a){
        for(let i=0;i<a.length;i++){
            console.log(typeof a[i])
            if((typeof a[i])=="number"){
                flatArr.push(a[i])
            }else if(Array.isArray(a[i])){
                console.log("array");
                flat(a[i])
            }
        }
    }
    flat(arr)
   
    return Math.max(...flatArr)
}
console.log(largestInNested([1,2,[14,6,[12,4,56,6]]]))
//***************************************************************************** */
//Fibonacci : [1,1,2,3,5,8]
function fibonacci(num){
    let fib=[1,1]
    function fibfunc(a){
        console.log(a,fib)
        if(fib.length===num) return fib;
        fib.push(a)
        return fibfunc(fib[fib.length-1] + fib[fib.length-2])
    }
    fibfunc(2);
    return fib
}
console.log(fibonacci(5))
//***************************************************************************** */
//fizzbuzz
function fizzBuzz(n){
    let arr=[]
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            arr.push("fizzbuzz")
        }else if(i%3===0){
            arr.push("fizz")
        }else if(i%5===0){
            arr.push("buzz")
        }else{
            arr.push(i)
        }
    }
    return arr
}
console.log(fizzBuzz(15))
//***************************************************************************** */
//Find Duplicates
function findDuplicates(arr){
    let nonduplicates=new Set();
    let results=[];
    for(let num of arr){
        if(nonduplicates.has(num)){
            results.push(num)
        }else{
            nonduplicates.add(num)
        }
    }
    return {nonduplicates,results}
}
console.log(findDuplicates([1,7,8,3,2,1,2,5,5]))
//***************************************************************************** */
//method1 anagram
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
//method2 anagram
//anagram
function anagram(str1, str2){
    let str1obj={}
    let str2obj={}
    for(let i of str1){
        str1obj[i]=str1obj[i]?str1obj[i]+1:1
    }
    for(let i of str2){
        str2obj[i]=str2obj[i]?str2obj[i]+1:1
    }
    for(let key in str1obj){
        if(str1obj[key]!=str2obj[key]){
            return false
        }
    }
    for(let key in str2obj){
        if(str1obj[key]!=str2obj[key]){
            return false
        }
    }
    console.log(str1obj,str2obj)
    return true
}
console.log(anagram("hello","llohe9"))
//***************************************************************************** */
//merge two sorted arrays
function mergeSortedArrays(arr1,arr2){
    let merged=[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    return merged;

}
const arr1 = [1, 3, 5, 7,9];
const arr2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
//***************************************************************************** */
//binary search
function binarySearch(arr,n){
    let left=0, right=arr.length-1;
    
   
    while(left<= right){
        let mid=Math.floor((left+right)/2);
        console.log(left,right,mid)
        if(arr[mid]===n){
            console.log(mid,"1")
            return mid
        }else if(arr[mid]>n){
           
            right=mid+1;
            console.log(mid,"2")
        }else if(arr[mid]<n){
            left=mid-1
            console.log(mid,"3")
        }else{
            return -1
        }
console.log(mid)
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7],5));


//***************************************************************************** */
//method 1
//Find Missing Number
function findMissingNumber(arr){
    let initialnumber=arr[0];
    for(let i=1;i<arr.length;i++){
        initialnumber++;
        if(initialnumber!==arr[i]){
            return `Missing ${initialnumber} number`
        }
    }
    return true
}
console.log(findMissingNumber([1,2,4,5,6]))
//method 2
function findMissingNumber(arr) {
    const n = arr.length + 1; // Since one number is missing
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

//***************************************************************************** */
//remove the non paired element in the array of odd elements
//method 1 uisng Maps
function solution(A) {   
    let keyvalue=0;
    let map=new Map()
    for(let i of A){     
        if(!map.has(i)){
            map.set(i,1)
        }else{
            let x=map.get(i);
            x++;
            map.set(i,x)
        }
    }
    for(let [key,value] of map){
        if(value%2!==0){
             keyvalue=key
        }
    }
    return keyvalue
}
console.log(solution([9,3,9,9,3,7,9]))
//method 2
function solutions(A) {   
    let obj={};
    let keyvalue=0;
    for(let i of A){     
        if(!obj[i]){
            obj[i]=1
        }else{
            obj[i]++;
        }
    }
    for(let key in obj){
        if(obj[key]%2!==0){
             keyvalue=+key
        }
    }
    console.log(obj,keyvalue)
    return keyvalue
}
console.log(solutions([9,3,9,9,3,7,9]))
//***************************************************************************** */
//rotate array to right by give steps
//CyclicRotation
function CyclicRotation(arr,step){
    while(step>0){
        let poped=arr.pop();
        arr.unshift(poped)
        console.log(arr)
        step--
    } 
}
console.log(CyclicRotation([1,2,3,4,5],4))
//***************************************************************************** */
//The entrance fee of the car parking lot is 2;
//The first full or partial hour costs 3;
//Each successive full or partial hour (after the first) costs 4.
//input will be HH:MM , 0 to 23H, 0 to 59mins
function parkingLot(E, L) { 
    let E1=E.split(":")
    let L1=L.split(":")
    let hourDifference=L1[0]-E1[0];
    let minDifference=L1[1]-E1[1];
     let pay=((hourDifference-1)*4)+5;
     if(minDifference>0){
         pay=pay+4
     }
     return pay
 }
 console.log(parkingLot("09:42","11:42"))
//***************************************************************************** */
//that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//Given A = [1, 2, 3], the function should return 4.
//Given A = [−1, −3], the function should return 1.
//Write an efficient algorithm for the following assumptions:
//N is an integer within the range [1..100,000];
//each element of array A is an integer within the range [−1,000,000..1,000,000].

function solutionfind(A) {
    let max=(Math.max(...A))+1;
    for(let i=1;i<=max;i++){
        if(!A.includes(i)){
            return i
        }
    }
}
console.log(solutionfind([-1,-3,1,2,4]))
//***************************************************************************** */
//Find the first unique number in a given sequence.
function firstUnique(A) {
    let map=new Map()
    for(let i of A){
        obj[i]=obj[i]?obj[i]+1 : 1;
        if(map.has(i)){
           let x= map.get(i)+1;
           map.set(i,x)
        }else{
            map.set(i,1)
        }   
    }
    console.log(obj)
    for(let [key,value] of map){
        if(value===1){
           return key
        }    
    }
     return -1
 }
 console.log(firstUnique([2,10,4,2,3,5,10]))
//***************************************************************************** */
// give the index of the letter when left and right side characters are same

function substringreverse(S) {
    if(S.length<=1 ){
        return -1
    }
    let left=0,right=S.length-1;
    while(left<=right){
        if(left==right){
          return left
        }else if(S[left]==S[right]){
            
            left++;
            right--;
        }else if(S[left]!=S[right]){
            return -1
        }else{
          return -1
        }
    }
    return -1
 }
 console.log(substringreverse("racecar"))
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
//***************************************************************************** */
  