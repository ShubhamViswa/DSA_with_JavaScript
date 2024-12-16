//  InOrder Traversal Iteratively

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inOrder(root){
    
    let result = []
    let stack = [];
    let current = root;
    
    while(current != null || stack.length > 0){
        
        while(current !== null){
            stack.push(current)
            current = current.left;
        }
           current = stack.pop();
           result.push(current.data);
           
           current = current.right;
    }
      return result;
    }

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Perform Level Order Traversal
console.log(inOrder(root)); // Output: [1, 2, 3, 4, 5, 6, 7]
