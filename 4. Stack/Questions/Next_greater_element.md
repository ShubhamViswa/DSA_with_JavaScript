### *Question* --> You are given an array of integers find the next greater integer for index of the array and if not found then return -1 
---

    Example --> Input = [ 8,6,4,7,4,9,10,8,12];
                Output = [9,  7,  7,  9, 9, 10, 12, 12, -1];

Coding implementation 

```Javascript

let arr = [ 8,6,4,7,4,9,10,8,12];
let ans = new Array(arr.length).fill(-1);
let n = arr.length;
let stack = [];
 for(let i = 0; i<n; i++){
     while( stack.length > 0 && arr[i] > arr[stack.length-1]){
         let index = stack.pop();
         ans[index] = arr[i];
         
     }
   stack.push(i);
 }
 
 console.log("Result = ", ans);
 
```
