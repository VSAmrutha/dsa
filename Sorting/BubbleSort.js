function swap(arr,i1,i2){
    [arr[i1],arr[i2]]=[arr[i2],arr[i1]]
    console.log("in if after",arr)
}
function bubblesort(arr){
    const swap=(arr,idx1,idx2)=>{
    [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
}
      let noSwaps;
    for(let i=arr.length;i>0;i--){
       noSwaps=true
        for(let j=0;j<i-1;j++){
            console.log(arr,arr[j],arr[j+1])
            if(arr[j]>arr[j+1]){
                //******Swapping in way-1********////
                // let temp=arr[j]
                // arr[j]=arr[j+1]
                // arr[j+1]=temp

                
                //******Swapping in way-1, in one liner********////
               // [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                
                //**********Function for swap(optional)*********//
                 swap(arr,j,j+1)
                noSwaps=false     
            }
        }
         if(noSwaps) break;
    }
    return arr
}
// bubblesort([8,1,2,0,9])
// bubblesort([156,67,23,94,45,20,1])
bubblesort([8,1,2,3,4,5,6,7])
