//  Postorder Traversal Iteratively Using Two Stack

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function postOrder(root){
    
    let result = []
    
    // let current = root;
    let stack1 = [root];
    let stack2 = [];
    
    while(stack1.length > 0){
    // stack1.push(current);
    let top1 = stack1.pop();
    if(top1.left) stack1.push(top1.left);
    if(top1.right) stack1.push(top1.right);
    stack2.push(top1);
    }
    while(stack2.length > 0){
        let top2 = stack2.pop();
        result.push(top2.data);
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
console.log(postOrder(root)); // Output: [1, 2, 3, 4, 5, 6, 7]

