// function PalinArray(arr,n){

// }
function isPali(str){
    function che(x,y,l){
        if(x==y){
         console.log(x,y,"hkhg")
         return true
        } 
        if(str[x]!==str[y]) {
            console.log("not true",str[x],str[y])
            return "false"
        };
        if(str[x]==str[y]){
            console.log(str[x],str[y])
            x++;
            y--;
            che(x,y)
        } 
       
      
      
    }
   return che(0,str.length-1,str.length)

}
isPali("11031")
// PalinArray([111,222,222,333],4)