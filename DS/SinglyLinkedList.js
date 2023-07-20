class Node{
    constructor(val){
       this.value=val;
        this.next=null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    push(val){
        const newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.length++
        return this
    }
    //prints all elements in the list
    traverse(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
    //removes the last element in the list
    pop(){
        if(this.length===0) return undefined;
        let current=this.head;
        let newTail=current; //saves the element which is pointing to tail
        while(current.next){
            newTail=current
            current=current.next
        }    
        this.tail=newTail
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
        
    }
    //removing the node from the beginning of the list
    shift(){
        if(this.length===0) return undefined;
         let currentHead=this.head;       
        this.head=currentHead.next;
        currentHead.next=null;
        this.length--
         //this is when LL has only one node.
            if(this.length===0){
                this.tail=null ;
            }
        return currentHead;
    }
    unshift(val){
        const newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=this.head;
        }else{
          newNode.next=this.head;
            this.head=newNode;  
        }
        this.length++
        return this
    }
  get(index){
        if(index<0 || index>=this.length) return undefined;
        let temp=this.head;
       for(let i=0;i<index;i++){
           temp=temp.next;
       }
        return temp;
    }
    set(index,value){
        let temp=this.get(index);
        if(temp){
            temp.value=value
            return true
        }
        return false      
    }
    insert(index,value){
        if(index>this.length || index<0) return false
        if(index===0) return this.unshift(value)
        if(index===this.length) return this.push(value)
        let temp=this.get(index-1);
         const newNode=new Node(value);
        newNode.next=temp.next
        temp.next=newNode;
        this.length++
        return true
    }
    remove(index){
        if(index >= this.length || index<0) return false
        if(index===0) return this.shift()
        if(index===this.length-1) return this.pop()
        let before=this.get(index-1);
        let temp=before.next;// better to do this way instead of doing temp=this.get(index), to avoid looping through as "get" is O(n)
        before.next=temp.next;
        temp.next=null;
        this.length--
        return temp     
    }
    reverse(){
        let temp=this.head;
        this.head=this.tail;
        this.tail=temp;
        let prev=null
        let next=temp.next;
        for(let i=0;i<this.length;i++){
            next=temp.next
            temp.next=prev;
            prev=temp
             temp=next     
        }
        return this
    }
}
const list=new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);