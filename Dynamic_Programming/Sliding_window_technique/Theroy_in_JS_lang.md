### Sliding Window Technique in JavaScript

The **sliding window technique** is an efficient way to solve problems that involve contiguous subarrays or substrings. It reduces the time complexity of problems by eliminating unnecessary repeated computations.

Here’s an in-depth explanation, along with JavaScript examples:

---

### **Core Idea**

- **Window**: A range of elements within an array or string.
- **Sliding**: Moving the start or end of the window dynamically to explore new elements or exclude old ones.

#### **Two Variants**
1. **Fixed-size window**: The window size is constant.
2. **Dynamic-size window**: The window size changes based on conditions.

---

### **1. Fixed-Size Sliding Window**

**Problem**: Find the maximum sum of any subarray of size `k`.

#### **Steps**:
1. Use a variable to track the sum of the current window.
2. Slide the window by subtracting the element going out and adding the element coming in.

#### **Example**:

```javascript
function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;

    let maxSum = 0, windowSum = 0;

    // Calculate the initial window sum
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
```

---

### **2. Dynamic-Size Sliding Window**

**Problem**: Find the smallest subarray with a sum >= `target`.

#### **Steps**:
1. Expand the window by moving the end pointer.
2. Shrink the window by moving the start pointer while keeping the condition valid.

#### **Example**:

```javascript
function minSubarrayLen(target, arr) {
    let minLen = Infinity;
    let start = 0, sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        // Shrink the window as small as possible while the sum is >= target
        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= arr[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// Example usage
console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4, 3])
```

---

### **3. Longest Substring Without Repeating Characters**

**Problem**: Find the length of the longest substring with all unique characters.

#### **Steps**:
1. Use a set to track characters in the current window.
2. Expand the window by adding characters, and shrink it when duplicates are found.

#### **Example**:

```javascript
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
```

---

### **4. Count Anagrams in a String**

**Problem**: Count all substrings in `s` that are anagrams of a string `p`.

#### **Steps**:
1. Use a frequency map to track the characters in the current window.
2. Compare the frequency map of the window with the target string's frequency map.

#### **Example**:

```javascript
function findAnagrams(s, p) {
    const result = [];
    const targetCount = new Map();
    const windowCount = new Map();

    // Initialize frequency map for the target string
    for (const char of p) {
        targetCount.set(char, (targetCount.get(char) || 0) + 1);
    }

    let start = 0, matches = 0;

    for (let end = 0; end < s.length; end++) {
        const endChar = s[end];
        windowCount.set(endChar, (windowCount.get(endChar) || 0) + 1);

        if (windowCount.get(endChar) === targetCount.get(endChar)) {
            matches++;
        }

        if (end - start + 1 > p.length) {
            const startChar = s[start];
            if (windowCount.get(startChar) === targetCount.get(startChar)) {
                matches--;
            }
            windowCount.set(startChar, windowCount.get(startChar) - 1);
            start++;
        }

        if (matches === targetCount.size) {
            result.push(start);
        }
    }

    return result;
}

// Example usage
console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
```

---

### **Tips for Implementing Sliding Window in JavaScript**
1. **Identify the problem type**: Fixed or dynamic window.
2. **Track window state**: Use variables, arrays, or maps.
3. **Expand and shrink intelligently**: Understand when to move the start and end pointers.
4. **Optimize condition checks**: Avoid unnecessary loops by maintaining efficient state tracking.

Would you like additional problem examples or explanations?
