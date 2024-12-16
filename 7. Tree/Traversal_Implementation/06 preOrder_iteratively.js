//  preOrder Traversal Iterative Method

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preOrder(root){
    
    if(root === null) return null;
    
    let result = []
    let stack = [root];
    
    while(stack.length > 0){
        
        let current = stack.pop();
        result.push(current.data);
        
        if(current.right) stack.push(current.right);
        if(current.left)stack.push(current.left);
        
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

// Perform  preOrder Traversal
console.log(preOrder(root)); // Output: [1, 2, 3, 4, 5, 6, 7]
