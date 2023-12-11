class WeightedGraph{
    constructor(){
        this.adjancenylist =  {};
    }
    addVertex(vertex){
        if(!this.adjancenylist[vertex]) this.adjancenylist[vertex] = []; 
    }
    addEdge(vertex1, vertex2 , weight){
        this.adjancenylist[vertex1].push({node:vertex2, weight}); 
        this.adjancenylist[vertex2].push({node:vertex1, weight});
    }

}