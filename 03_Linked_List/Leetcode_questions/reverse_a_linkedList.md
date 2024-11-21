## Reverse a Linked List 
1. [LeetCode Problem](https://leetcode.com/problems/reverse-linked-list/)
2. [Article 💫](https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088)

```Javascript
var reverseList = function(head) {
    let previous = null;
    let current = head;
    let following = head;

    while(current !== null){
        following  = following.next;
        current.next = previous;
        previous = current;
        current = following;
    }
    
    return previous;
};
```

