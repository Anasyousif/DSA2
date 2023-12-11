class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
class WeightedGraph{
    constructor(){
        this.adjanceyList = {}; 
    }
    addVertex(vertex){
        if(!this.adjanceyList[vertex]) this.adjanceyList[vertex] = [];
    }
    addEdge(vertex1, vertex2 , weight){
        this.adjanceyList[vertex1].push({node:vertex2, weight}); 
        this.adjanceyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
      const nodes = new PriorityQueue(); 
      const distances  = {}; 
      const pervious = {}; 
      let path = [] // to return to end
      let smallest; 
      // bulid initial case
      for(let vertex in this.adjanceyList){
        if(vertex === start){
            distances[vertex] = 0; 
            nodes.enqueue(vertex, 0);
        } else{
            distances[vertex] = Infinity
            nodes.enqueue(vertex,Infinity)
        }
        pervious[vertex] = null; 
      }
      // as long as there is something to visit
while(nodes.values.length){
    smallest = nodes.dequeue().val; 
    if(smallest === finish){
     // We are done 
     // BULID UP A PATH TO RETURN TO THE END
     while(pervious[smallest]){
        path.push(smallest); 
        smallest = pervious[smallest]
     }
     break
    }
    if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjanceyList[smallest]){
            // find the neighboring node
            let nextNode = this.adjanceyList[smallest][neighbor]; 
            // calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight; 
            let nextNeighbor = nextNode.node; 
            if(candidate < distances[nextNeighbor]){
                // updating new smallest distance to neighbor 
                distances[nextNeighbor] = candidate; 
                //updating pervious - how we got to neighbor
                pervious[nextNeighbor] = smallest
                // enqueue in a priority queue
                nodes.enqueue(nextNeighbor, candidate);
            }
        }
    }
}
return path.concat(smallest).reverse(); 

}  
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]