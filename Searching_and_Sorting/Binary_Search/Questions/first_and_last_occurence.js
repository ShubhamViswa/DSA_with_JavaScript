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

  return {first , last};
  
}

let x = first_last_occurance(arr, 8)
console.log(x);

