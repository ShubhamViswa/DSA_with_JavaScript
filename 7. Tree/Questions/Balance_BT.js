//  Check Binary tree is Balanced or Not

class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function Balanced_BT(root){
    
    if(root === null) return 0;
    
     let leftHeight = Balance_BT(root.left);
     let rightHeight = Balance_BT(root.right);
     
     if(leftHeight === -1 || rightHeight === -1) return -1;
     
     if((Math.abs(leftHeight - rightHeight) > 1)) return -1;
     
     return Math.max(leftHeight, rightHeight) + 1;
}

let root = new Tree(1);
// root.left = new Tree(2);
root.right = new Tree(3);
// root.left.left = new Tree(4);
// root.left.right = new Tree(5);
// root.right.left = new Tree(6);
root.right.right = new Tree(7);
root.right.right.left = new Tree(17);
root.right.right.left.left = new Tree(7);

console.log(Balance_BT(root));
