// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    

DFSPostOrder(){
     let results = [];
     
     function traverse(currentNode){
         
             if(currentNode.left){
                 traverse(currentNode.left)
             }
             if(currentNode.right){
                 traverse(currentNode.right)
             }
       results.push(currentNode.value)
       
     }
      traverse(this.root)
         return results;
}
 }
 
 const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log(tree.DFSPostOrder());
