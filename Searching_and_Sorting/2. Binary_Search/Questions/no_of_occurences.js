//  Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.
/* Example 1:
        Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
        Output: 3

Example 2:
        Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 6
        Output: 0

Example 3:
        Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 5
        Output: 4
*/

//  First and Last Occurrences of x in Array 

let arr = [2,8,8,8,8,8,11,13];
let target = 8;

function first_last_occurance(arr, target){

  let first = -1;
  let last = -1;

  // finding the first occurrence
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi){
    let mid = Math.floor((lo + hi) / 2);
    if(arr[mid] === target) {
      first = mid;
      hi = mid - 1;
    }else if(arr[mid] > target){
      hi = mid - 1;    
    }else{
      lo = mid + 1;
    }
  }

  //  finding the last occurence

  lo = 0;
  hi = arr.length - 1;
  while(lo<=hi){
    let mid = Math.floor((lo+hi)/2);
    if(arr[mid] === target){
      last = mid;
      lo = mid + 1;
    }else if(arr[mid] > target){
      hi = mid - 1;
    }else{
      lo = mid + 1;
    }
  }
   if(first === -1 && last === -1) return 0;

  return (last - first) + 1;
  
}

let x = first_last_occurance(arr, target);
console.log(x);

