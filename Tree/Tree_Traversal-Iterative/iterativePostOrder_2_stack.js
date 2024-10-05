postOrderTwoStacks() {
        if (this.root === null) return [];

        let stack1 = [];  // First stack for traversal
        let stack2 = [];  // Second stack to reverse the order
        let result = [];

        // Start with pushing the root node onto the first stack
        stack1.push(this.root);

        // Traverse while stack1 is not empty
        while (stack1.length > 0) {
            let currentNode = stack1.pop();
            stack2.push(currentNode);  // Push node onto second stack

            // Push left and right children into stack1
            if (currentNode.left !== null) {
                stack1.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                stack1.push(currentNode.right);
            }
        }

        // Now, pop all items from stack2 to get the postorder traversal
        while (stack2.length > 0) {
            result.push(stack2.pop().value);
        }

        return result;
    }
