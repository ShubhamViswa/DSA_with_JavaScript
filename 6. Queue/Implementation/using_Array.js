//  Implementation of Queue using Array 

class Queue{
    constructor(){
        this.element = []
    }
    
    enqueue(node){
        this.element.push(node);
    }
    
    dequeue(node){
        if(this.element.length > 0){
            return this.element.shift();
        }else{
            return "Underflow Situation";
        }
    }
    
    isEmpty(){
        return this.element.length = 0;
    }
    
    front(){
        if(this.element.length > 0){
          return this.element[0];
        }else{
            return "The Queue is Empty!" ;
        }
    }
    
    print(){
        return this.element;
    }
}

let s = new Queue();

s.enqueue(5);
s.enqueue(3);
s.isEmpty();
s.enqueue(22);
s.enqueue(8);
console.log(s.front());

console.log(s.print());
