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
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
}

var list = new SignkyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")