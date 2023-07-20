//my version

class MaxBinaryHeap{
    constructor(){
        this.value=[]
    }
    swap(arr,a1,a2){
        [arr[a1],arr[a2]]=[arr[a2],arr[a1]]
    }
    insert(value){
        this.value.push(value)
        let index=this.value.indexOf(value)
        let parentIndex=Math.floor((index-1)/2)
        while(this.value[parentIndex]<this.value[index]){
            this.swap(this.value,parentIndex,index)
            index=parentIndex;
            parentIndex=Math.floor((index-1)/2)
        }
        return this.value
    } 
    extractMax(){
        this.swap(this.value,0,this.value.length-1)
        let temp=this.value.pop();
        let parentIndex=0,index=this.value.length-1;
        //leftIndex<this.value.length || rightIndex<this.value.length
        while(true){
        let leftIndex=2*parentIndex+1
        let rightIndex=2*parentIndex+2
        if(this.value[parentIndex]<this.value[leftIndex] && this.value[parentIndex]<this.value[rightIndex]){
            let maxIndexValue=Math.max(this.value[leftIndex],this.value[rightIndex] || -Infinity)
            let maxIndex=this.value.indexOf(maxIndexValue)
            this.swap(this.value,parentIndex,maxIndex)
            parentIndex=maxIndex
        }else if(this.value[parentIndex]<this.value[leftIndex]){
            this.swap(this.value,parentIndex,leftIndex)
            parentIndex=leftIndex
        }else if(this.value[parentIndex]<this.value[rightIndex]){
            this.swap(this.value,parentIndex,rightIndex)
            parentIndex=rightIndex
        }else{
            return this.value
        }
    }
    }
}
const bh=new MaxBinaryHeap();
bh.insert(39)
bh.insert(41)
bh.insert(18)
bh.insert(12)
bh.insert(33)
bh.insert(27)
bh.insert(55)