function PalinArray(arr,n){
    for(let i=0;i<n;i++){
       let res= isPali(arr[i])
        if(!res){
            return false
        }
    }
    function isPali(val){
        
         let revereseVal=val.toString().split("").reverse()
      
       if(val.toString()==revereseVal.join("")){
           return true
       }else{
           return false
       }
        
    }
  return true
 }
console.log(PalinArray([111,222,3773],3))