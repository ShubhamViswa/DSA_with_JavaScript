iterativeInorder() {
  let result = [];
  let stack = [];
  let currentNode = this.root;

while(currentNode !== null || stack.length > 0) {
  while(currentNode !== null){
    stack.push(currentNode)
    currentNode = currentNode.left;
  }

  currentNode = stack.pop();
  result.push(currentNode.value);
  currentNode = currentNode.right;
}
return result;
};
