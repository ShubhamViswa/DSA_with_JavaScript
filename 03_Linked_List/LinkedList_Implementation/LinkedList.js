class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    // Inserting a Node at the Beginning;

    insertAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Inserting a Node at the Extreme End;

    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    //  Deleting of a Node By it's Value;

    deleteByValue(value){
        if(!this.head){
            return;
        }
        if(this.head.data === value){
            this.head = this.head.next
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.data === value){
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    searchNode(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.data === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    traverseAllNodes(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    findLinkdedListLength() {
        let currentNode = this.head;
        let length = 0;

        while(currentNode !== null){
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }

    reversedLinkedList(){
        let prev = null;
        let currentNode = this.head;
        let next = null

        while(currentNode !== null){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }

        this.head = prev;
    }
}
