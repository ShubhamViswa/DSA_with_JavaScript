

[LeetCode Problem](https://leetcode.com/problems/middle-of-the-linked-list/)

### Approach 1 --> Using Temp Variable only 

```Javascript
   var middleNode = function(head) {
     let temp = head;
     let count = 0;

     while(temp !== null){
        count++;
        temp = temp.next;
     }

     mid_Node = Math.floor(count/2);

     let temp_2 = head;
     while(mid_Node > 0){
        mid_Node = mid_Node - 1;
        temp_2 = temp_2.next;
     };
     return temp_2;
};

```
  The problem with this apprach is that it has O(n) Time complexity. So, to optimize this we will have to use another apprach which is *Approach 2*.

### Approach 2 --> Using slow and Fast Pointer (Tortoise and Hare algorithm)

```Javascript
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null  && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next ;
    }
    return slow;
};
```

