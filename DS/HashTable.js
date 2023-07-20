class HashTable{
    //if size is not passed then default will be 7
    constructor(size=7){
        this.dataMap=new Array(size)
    }
    // underscore(_hash) at the begining of the array means that it a method only be called in other method
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            //23 because it is prime number to make it more random
            hash=(hash+key.charCodeAt(i)*23)%this.dataMap.length
        }
        return hash
    }
    set(key,value){
        let index=this._hash(key)
        if(!this.dataMap[index]){
           this.dataMap[index]=[]    
        }
        this.dataMap[index].push([key,value])
        return this
    }
    myget(key){
        let index=this._hash(key)
        let temp=undefined 
        if(this.dataMap[index]){
            this.dataMap[index].map((item,i)=>{
                if(item[0]===key){
                    temp=item[1]
                }
            })
        }
        return temp
    }
    get(key){
        let index=this._hash(key)
       if(this.dataMap[index]){
           for(let i=0;i<this.dataMap[index].length;i++){
               if(this.dataMap[index][i][0]===key){
                   return this.dataMap[index][i][1]
               }
           }
       }
        return undefined
    }
    keys(){
        let allKeys=[];
        for(let i=0;i<this.dataMap.length;i++){
            if(this.dataMap[i]){
              for(let j=0;j<this.dataMap[i].length;j++){
                    allKeys.push(this.dataMap[i][j][0])
                }  
            }
            
        }
        return allKeys
    }
}
let ht=new HashTable()
ht.set("bolts",1000)
ht.set("washers",50)
ht.set("lumber",70)
