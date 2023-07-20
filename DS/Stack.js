class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(value){
        this.top=null;
        this.length=0;
    }
     //this is a unshift method in LL, here in stack its called push
    push(value){
        const newNode=new Node(value);
        if(this.length===0){
            this.top=newNode;
            this.next=null
        }else{
            newNode.next=this.top;
            this.top=newNode;   
        }
        this.length++;
        return this
    }
    
    pop(){
        if(this.length===0) return undefined;
        let temp=this.top;
        if(this.length===1){
            this.top=null;
        }else{
           this.top=temp.next;
            temp.next=null; 
        }
        this.length--;
        return temp;
    }
}
const stack=new Stack();
stack.push(11);
stack.push(12);
stack.push(13);