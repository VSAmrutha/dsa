class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(value){
        let temp=this.root;
        const newNode=new Node(value)
        if(!this.root){
             this.root=newNode;
            return this;
        }
        while(true){ //comes out of while only when it hits the return statement
            if(newNode.value===temp.value) return undefined
            if(newNode.value<temp.value){
               if(!temp.left){
                   temp.left=newNode
                   return this
               }
                   temp=temp.left
            }else{
                if(!temp.right){
                   temp.right=newNode
                    return this
               }
                   temp=temp.right
            }
        }     
    }
    contains(value){
        if(!this.root){
            return false;
        } 
        let temp=this.root;
        if(temp.value===value) return true
        while(temp){
            if(value<temp.value){
                temp=temp.left
            }else if(value>temp.value){
                temp=temp.right  
            }else{
                return true
            }
        }
        return false
    }
    //based on the fact that the left most contains the minimum value
    minValueNode(currentNode){
        console.log("heloo",currentNode)
        while(currentNode.left!=null){
            
            currentNode=currentNode.left
        }
        return currentNode
    }
    //breadth first search
    bfs(){
        let currentNode=this.root;
        let queue=[];
        let results=[];
        queue.push(currentNode)
        while(queue.length){          
            currentNode= queue.shift()
            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return results
    }
    //depth first search : PRE-ORDER
    //using call stack and recursion
    DFSPreOrder(){
        let results=[];
        function traverse(currentNode){
            results.push(currentNode.value) 
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        } 
        traverse(this.root)
        return results   
    }
    //depth first search : POST-ORDER
    //the root element goes at the last in the array
    DFSPostOrder(){
        let results=[];
        function traverse(currentNode){  
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value) 
        } 
        traverse(this.root)
        return results        
    }
    DFSInOrder(){
        let results=[];
        function traverse(currentNode){ 
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value) 
            if(currentNode.right) traverse(currentNode.right)  
        } 
        traverse(this.root)
        return results      
    }
    
}
const bst=new BST()
bst.insert(47)
bst.insert(21)
bst.insert(76)
bst.insert(18)
bst.insert(27)
bst.insert(52)
bst.insert(82)
// bst.minValueNode(bst.root.right)
bst.DFSPreOrder() // [47, 21, 18, 27, 76, 52, 82]
// bst.DFSPostOrder() // 18, 27, 21, 52, 82, 76, 47
// bst.DFSInOrder() //[18, 21, 27, 47, 52, 76, 82]