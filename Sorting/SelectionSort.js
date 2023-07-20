function selectionSort(arr){
    const swap=(arr,idx1,idx2)=>{
   [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
}
   let minIndex
   
   for(let i=0;i<arr.length;i++){
       minIndex=i
       for(let j=i+1;j<arr.length;j++){
           if(arr[j]<arr[minIndex]){
               minIndex=j
           }
        }
       if(i!=minIndex){
            swap(arr,i,minIndex)
       }
      
   }
   return arr
}
// selectionSort([56,3,6,7,9,0])
selectionSort([0,88,6,7,9,90])