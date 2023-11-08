let obj={
    name:"amu",
    age:31,
    [Symbol.iterator](){
         let step=0;
        let iterator={ 
          next(){
            step++;
            if(step===1){
                return {value:obj.name,done:false}
            }else if(step===2){
                return {value:obj.age,done:false}
            }else{
                return {value:undefined,done:true}
            }      
        }}
      return iterator
    }}
 let b=obj[Symbol.iterator]();
 console.log(b.next())
 console.log(b.next())
 // for(let i of obj){
 //     console.log(i,"object")
 // }
 