
iterativePreOrder(){
let result = [];
let stack = [];

if(this.root === null) return result;

stack.push(this.root);

while(stack.length > 0) {
  let currentNode = stack.pop();
  result.push(currentNode.value);

  if(currentNode.right) {
    stack.push(curentNode.right);
  }

  if(currentNode.left) {
    stack.push(currentNode.left);
  }
}
return result;
}
