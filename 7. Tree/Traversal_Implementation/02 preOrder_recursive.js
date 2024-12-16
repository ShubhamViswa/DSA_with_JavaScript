//  Preorder Traversal Recursively 

 class Tree{
     constructor(data){
         this.data = data;
         this.left = null;
         this.right = null;
     }
 }
 
 let result = []
 
 function preOrder(root){
     if(root === null) return null;
     
     result.push(root.data);
     
     preOrder(root.left);
     
     preOrder(root.right);
 }
 
let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

preOrder(root);
console.log(result);
