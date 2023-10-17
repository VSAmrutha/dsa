function mytest(str){
   let max=0,num=0;
   for(let i=0;i<str.length;i++){

      if(isDigit(str[i])){
         console.log(str[i],str[i].charCodeAt(0)-'0'.charCodeAt(0))
      num=+num*10+(+str[i])
      console.log(num,"num")
      }else{
         
         max=Math.max(num,max);
         num=0
      }
     
   }
   function isDigit(n){
      //console.log(n)
      if(n>'0' && n<='9'){
         return true
      }else{
         return  false
      }

   }
   return Math.max(max,num)
   
}
console.log(mytest("asdsad1112fsdf22cdf456"))