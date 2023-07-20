 //**************** 1 ************************//
// find sum of N, if N=3 then output should be 1+2+3=6
function seriesSum(n) {
    if(n===1) return 1
    return (n*(n+1))/2
    }
seriesSum(5)
 //**************** 2 ************************//
// Print 2nd largest number
 function print2largest(arr){
         let fl=0,sl=0;
         if(arr.length<2){
             return -1
         }
         arr.map(x=>{
             if(x>fl){
                 sl=fl
                 fl=x;
             }else if(x!=fl && x>sl){
                 console.log("x",x)
                 sl=x
             }
         })
         return sl;
     }
 print2largest([12, 35, 45,50 ,34, 46])
 //****************3************************//
 //Problem Given an array Arr of N positive integers. 
 //Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).
//Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing (start index starts from 1, not 0)of the array.
function valueEqualToIndex(arr,n){
    let res=[]
     for(let i=0;i<=n;i++){
       if(arr[i]==(i+1)){
            res.push(arr[i])
       }
   }
   return res
}
valueEqualToIndex([1,3,2,4,37],5)
 //**************** 4 ************************//
//sum of all elements in the array
function sumElement(arr,n) {
    let total=0;
    for(let i=0;i<n;i++){
        total=total + arr[i]
    }
    return total
 }
sumElement([1,3,2,4,37],5); //47

 //**************** 5 ************************//
 //Print numbers from 1 to N without the help of loops.
function printNos(N){
    function funn(N,arr=[],c=0){
        if(N==c) return console.log(...arr);
        c++
        arr.push(c)
        funn(N,arr,c)
    }
    funn(N)
}
printNos(10)
 //**************** 6 ************************//
 //You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).
 function print(arr,n){
    let res=[]
   for(let i=0;i<n;i++){
    if(i===0){
        res.push(arr[i])
    }else if(i%2==0){
        res.push(arr[i])
    }
   }

   return res

  }
  print([0,1,2,3,4,5],6)
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//
  //**************** 7 ************************//