//   Implementation of Inorder Traversal


class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let result = [];
function Postorder(root){
    if(root === null) return null;
    
    Postorder(root.left)
    
    Postorder(root.right);
    
    result.push(root.data);
}

let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(0);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(4);

 Postorder(root);
 console.log(result);
