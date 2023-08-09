//Big O is N2
function same(arr1,arr2){
    if(arr1.length!==arr2.length) return false
    for(let i=0;i<arr1.length;i++){
        //indexof iterates through entire array so it is nested for loop
        let correctIndex=arr2.indexOf(arr1[i]**2)
        if(correctIndex===-1){
            return false
        }
        //this removes that element from the error to make sure that frequencies are matching, in case two same numbers are present
        arr2.splice(correctIndex,1)
    }
    return true
}
//return true
same([1,2,3],[1,4,9]) 
//return false as the frequency is not correct
//same([1,2,1],[1,4,4])
//****************************************************************************************************
//*************** Better Big O solution, O(N)********************
function sameBetter(arr1,arr2){
    if(arr1.length!==arr2.length) return false;
    let frequencyCounter1={}
    let frequencyCounter2={}
    //creates an object with element and how many time its repeated in the array
   for(let val of arr1){
       frequencyCounter1[val]=(frequencyCounter1[val] || 0)+1
   }
     for(let val of arr2){
       frequencyCounter2[val]=(frequencyCounter2[val] || 0)+1
   }
    for(let key in frequencyCounter1){
        console.log(key, "key")
        //this is to check if the sqaure of element in frequencyCounter1 is present in frequencyCounter2
        if (!(key ** 2 in frequencyCounter2)){
            return false;
        }
        //if the sq of element is present then whether their values match(how many times the element is repeated)
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
            return false
        }
    }
    return true
}
sameBetter([1,2,3,1],[1,4,9,4])