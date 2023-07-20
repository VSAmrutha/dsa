class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    enqueue(value){
        const newNode=new Node(value);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode
        }
        this.length++;
        return this
    }
    dequeue(){
        if(this.length===0) return undefined;
        let temp=this.first;
        if(this.length===1){
            this.first=null;
            this.last=null;
        }else{
            this.first=temp.next;
            temp.next=null
        }
        this.length--;
        return temp
        
    }
}
const queue=new Queue();
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10)