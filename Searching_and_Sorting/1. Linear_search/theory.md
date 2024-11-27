A simple implementation of the **linear search** algorithm in JavaScript. Linear search iterates through each element of an array to find a target value. If the target is found, it returns its index; otherwise, it returns `-1`.

### Code Example

```javascript
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    // Return -1 if the target is not found
    return -1;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found in the array.");
}
```

### How It Works
1. The function iterates through the array using a `for` loop.
2. For each element, it checks if the current value matches the `target`.
3. If a match is found, it returns the index.
4. If the loop completes without finding the target, it returns `-1`.

### Output
For the above example:
```
Target found at index: 2
```

You can modify the code to search for strings or objects depending on your use case. Let me know if you'd like further modifications!
