### **Binary Search: Theory and Explanation**

Binary search is an efficient algorithm for finding a target value within a **sorted array**. It repeatedly divides the search interval in half, eliminating half of the possible elements each time, making it much faster than linear search for large datasets.

---

### **Key Concepts**
1. **Prerequisite: The Array Must Be Sorted**
   - Binary search only works on sorted arrays. If the array is not sorted, you must sort it first.

2. **Divide and Conquer Approach**
   - The algorithm compares the target value to the middle element of the array:
     - If the target matches the middle element, the search is complete.
     - If the target is smaller, search the left half.
     - If the target is larger, search the right half.

3. **Time Complexity**
   - **Best Case:** \( O(1) \) (if the target is found at the first comparison).
   - **Worst Case:** \( O(\log n) \) (because the array size is halved in each step).
   - **Space Complexity:** 
     - \( O(1) \) for the iterative approach.
     - \( O(\log n) \) for the recursive approach (due to the call stack).

---

### **Algorithm Steps**
1. Define two pointers: `low` (start of the array) and `high` (end of the array).
2. While `low` is less than or equal to `high`:
   - Calculate the middle index: `mid = Math.floor((low + high) / 2)`.
   - Compare the middle element with the target:
     - If equal, return the index.
     - If smaller, set `low = mid + 1` (search the right half).
     - If larger, set `high = mid - 1` (search the left half).
3. If the target is not found, return `-1`.

---

### **Binary Search Implementation in JavaScript**

#### **Iterative Version**
```javascript
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      low = mid + 1; // Search the right half
    } else {
      high = mid - 1; // Search the left half
    }
  }

  return -1; // Target not found
}

// Example Usage
const sortedArray = [2, 4, 6, 8, 10, 12];
console.log(binarySearch(sortedArray, 10)); // Output: 4
console.log(binarySearch(sortedArray, 5));  // Output: -1
```

---

#### **Recursive Version**
```javascript
function binarySearchRecursive(arr, target, low, high) {
  if (low > high) {
    return -1; // Base case: target not found
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
  }
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearchRecursive(sortedArray, 7, 0, sortedArray.length - 1)); // Output: 3
console.log(binarySearchRecursive(sortedArray, 2, 0, sortedArray.length - 1)); // Output: -1
```

---

### **Comparison: Iterative vs Recursive**
| **Feature**           | **Iterative**       | **Recursive**        |
|------------------------|---------------------|----------------------|
| **Space Complexity**   | \( O(1) \)          | \( O(\log n) \)      |
| **Ease of Implementation** | Easier for beginners | Requires understanding recursion |
| **Performance**        | Similar            | Similar              |

---

### **Applications of Binary Search**
1. Searching in large sorted datasets (e.g., dictionaries, databases).
2. Finding an element in a rotated sorted array.
3. Solving optimization problems:
   - Finding square roots.
   - Minimum or maximum in a sorted range.
4. Searching in binary search trees (BST).

---

### **Practice Problems**
1. Implement a binary search function that works for strings in a sorted array.
2. Modify the algorithm to return the first occurrence of the target if duplicates exist in the array.
3. Solve the "search in a rotated sorted array" problem using binary search.
4. Find the square root of a number using binary search.
