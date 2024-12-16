//   Implementation of Inorder Traversal recursively
class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let result = [];
function Inorder(root){
    if(root === null) return null;
    
    Inorder(root.left)
    
    result.push(root.data);
    
    Inorder(root.right);
}

let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(0);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(4);

 Inorder(root);
 console.log(result);
