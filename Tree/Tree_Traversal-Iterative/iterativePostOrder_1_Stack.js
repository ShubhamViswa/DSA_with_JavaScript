postOrderOneStack() {
        let stack = [];
        let result = [];
        let currentNode = this.root;
        let lastVisitedNode = null;

        while (currentNode !== null || stack.length > 0) {
            // Step 1: Push all left children onto the stack
            if (currentNode !== null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                // Step 2: Peek the node on top of the stack
                let peekNode = stack[stack.length - 1];

                // Step 3: If the right child exists and hasn't been visited yet, traverse the right subtree
                if (peekNode.right !== null && lastVisitedNode !== peekNode.right) {
                    currentNode = peekNode.right;
                } else {
                    // Step 4: Process the node (since right child is either visited or null)
                    result.push(peekNode.value);
                    lastVisitedNode = stack.pop(); // Mark the node as visited
                }
            }
        }

        return result;
    }
