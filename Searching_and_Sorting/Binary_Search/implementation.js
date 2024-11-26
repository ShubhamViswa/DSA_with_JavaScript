// iteretive Approach
let arr = [3,4,6,7,9,12,16,17];
let target = 4;

function BinarySearch(arr, target){
let low = 0;
let high = arr.length;
  while(low<=high){
    mid = Math.floor((low + high)/2);
    if(arr[mid] === target){
      return mid;
    }else if(arr[mid] > target){
      high = mid - 1;
    }else {
      low = mid + 1;
    }
  }
  return mid;
};
console.log(BinarySearch(arr, target));

// Recursive Approach

 
 let arr = [3,4,6,7,9,12,16,17];

 function BinarySearch(arr, low, high, target){
  if(low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if(arr[mid] === target) return mid;

  else if (target > arr[mid]) return BinarySearch(arr, mid + 1, high, target);

  return BinarySearch(arr, low , high -1, target);
}

console.log(BinarySearch(arr, 0, arr.length, 8))

