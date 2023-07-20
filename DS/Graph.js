class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
            return true
        }
        return false      
    }
    addEdge(vertex1,vertex2){
       if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
           return true
       }      
        return false
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=>v!==vertex1)
            return true
        }
        return false
    }
    //if the list is bidirectional like in this case then we can use a trick to remove addEdge
    //lets say, you want to remove D then go to D and check the edges in the D, store them in a temp and go to the temp only to remove D
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return undefined
        while(this.adjacencyList[vertex].length){
            let temp=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,temp)
        }
        delete this.adjacencyList[vertex]
        return this
    }
    //accepts a starting vertex
    DFSRecursive(vertex){
        let results=[]
        let visitedVertex={}
        let DFS=(vertex)=>{
            if(!vertex) return null
            visitedVertex[vertex]=true
            results.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visitedVertex[neighbor]){
                    return DFS(neighbor)
                }
            })          
        }
        DFS(vertex)
        return results
    }
    //accepts a starting vertex
    DFSIterative(vertex){
        let stack=[vertex];
        let results=[];
        let visitedVertex={};
        let temp
        while(stack.length){
            temp=stack.pop();
            if(!visitedVertex[temp]){
                results.push(temp);
                visitedVertex[temp]=true;
                stack=[...this.adjacencyList[temp]]
            }
        }
        return results;       
    }
    BFS(vertex){
       let queue=[vertex];
        let results=[];
        let visitedVertex={};
        let temp
        visitedVertex[vertex]=true
        while(queue.length){
            temp=queue.shift()
            results.push(temp)
            this.adjacencyList[temp].forEach(neighbor=>{
                if(!visitedVertex[neighbor]){
                visitedVertex[neighbor]=true;
                    queue.push(neighbor)
                }
            })
            
        }
        return results
    }
}
let graph=new Graph()
//removeedge
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","A")

//removevertex vertex D
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addEdge("A","B")
// graph.addEdge("A","C")
// graph.addEdge("A","D")
// graph.addEdge("B","D")
// graph.addEdge("C","D")

//graph traversal
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
