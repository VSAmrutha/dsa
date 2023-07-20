class Node{
    constructor(value){
       this.value=value;
       this.next=null;
       this.prev=null;
    }
}
class DoublyLinkedList{
   constructor(){
      this.head=null;
       this.tail=null;
       this.prev=null;
      this.length=0;
   }
   push(value){
     const newNode=new Node(value) 
      if(this.length==0){
         this.head=newNode;
         this.tail=this.head;
      }else{
         this.tail.next=newNode;
          newNode.prev=this.tail
         this.tail=newNode; 
      }
      this.length++
      return this;
   }
   pop(){
      if(this.length===0) return "No item"
       let temp= this.tail
      if(this.length===1){
         this.head=null;
         this.tail=null;
      }else{   
         this.tail=this.tail.prev;
         this.tail.next=null
         temp.prev=null
      }   
      this.length--;
      return temp
   }
   unshift(value){
      const newNode=new Node(value)
      if(this.length===0){
         this.head=newNode;
         this.tail=newNode;
      }else{
         newNode.next=this.head;
         this.head.prev=newNode;
         this.head=newNode
      }
      this.length++;
      return this;
   }
   shift(){
      if(this.length===0) return 'No item';
      let temp=this.head;
      if(this.length===1){
         this.head=null;
         this.tail=null
      }else{
         this.head=temp.next;
         this.head.prev=null
         temp.next=null;
      }
       this.length--;
      return temp;
   }
   get(index){
      if(index<0 || index>=this.length) return undefined;
      let temp=this.head
      //different compared to single LL as in DLL we can traverse from tail as well
      if(index<this.length/2){
         for(let i=0;i<index;i++){
         temp=temp.next
         }
      }else{
         temp=this.tail;
         for(let i=this.length-1;i<index;i--){
            temp=temp.prev
         }
      }
      return temp;
   }
   set(index,value){
      let temp=this.get(index);
      if(temp){
          temp.value=value
         return true
      }  
      return false;
   }
   insert(index,value){
      if(index<0 || index>=this.length) return undefined
      if(index===0) return this.unshift(value)
      if(index===this.length) return this.push(value)
      const newNode=new Node(value)
      let before=this.get(index-1);
      let after=before.next;
      before.next=newNode
      newNode.prev=before; //different compared to single LL
      newNode.next=after;
      after.prev=newNode; //different compared to single LL
      this.length++
      return this;  
   }
   remove(index){
      if(index<0 || index>=this.length) return undefined
      if(index===0) return this.shift()
      if(index===this.length) return this.pop()
      let temp=this.get(index)
      temp.prev.next=temp.next;
      temp.next.prev=temp.prev
      temp.next=null;
      temp.prev=null;
      this.length--;
      return temp;
      
   }
   reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
 
    while (current) {
        let next = current.next;
        let prev = current.prev;
        current.next = prev;
        current.prev = next;
        current = next;
    }
    return this;
}
    
}
const list=new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
