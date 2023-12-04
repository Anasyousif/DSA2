// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}
class SignkyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){

    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
var list = new SignkyLinkedList()
list.push("Hello")
list.push("GOODBYE")
