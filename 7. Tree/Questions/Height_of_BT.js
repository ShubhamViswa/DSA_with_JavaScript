//  Height of a Binary tree


class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function height_of_BT(root){
    
    // if root is equal to null return 0;
    
    if(root === null) return 0;
    
        let leftHeight = height_of_BT(root.left);
        let rightHeight = height_of_BT(root.right);
    
    
    return 1 + Math.max(leftHeight,rightHeight);
    
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

 console.log(height_of_BT(root));
