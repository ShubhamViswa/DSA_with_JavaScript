class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    printList(){
        let current = this.head;
        const element = [];
        while(current){
            element.push(current.value);
            current = current.next;
        }
        console.log(element.join( " -> "))
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("original List:");
list.printList();

list.reverse();
