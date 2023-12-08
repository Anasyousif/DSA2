class Graph {
    constructor(){
        this.adjacencenyList = {}; 
    }
    addVertex(vertex){
        if(!this.adjacencenyList[vertex]) this.adjacencenyList[vertex] = []; 
    }
}