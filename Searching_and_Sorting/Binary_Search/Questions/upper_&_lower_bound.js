
// Lower Bound ---> The smallest index whose value is just greater than or equal to the target 
//                  arr[i] >= target 

// Implementation of lower bound using Binary Search

 let arr = [3,4,6,7,9,12,16,17];
//  let target = 4;

function lowerBound(arr, target){
    let low = 0;
    let high = arr.length;
    
  while(low < high){
     let mid = Math.floor((low + high) / 2);

    if(target > arr[mid]) {
        low = mid + 1;
    }else {
     high = mid;
    }
}
return low;
}
console.log(lowerBound(arr, 0));

// Upper Bound implementation --> the smallest index whose value is just greater than target (not equal to just greater than) 
//                            arr[i] > target 


function upperBound(arr, target){
  let low = 0;
  let high = arr.length;

  while(low < high){
    let mid = Math.floor( (low + high) / 2);

    if(arr[mid] <= target){
      low = mid + 1;
    }else {
      high = mid ;
    }
  }
}

//  Question --> Search Insert Position [Visit this link](https://leetcode.com/problems/search-insert-position/submissions/1463213060/)
       
// floor and Ceil in Sorted Array 
// floor means the largest no. in an array which is just lesser than or equal to x(target)
              // largest no. in array <= x

//  ceil means the smallest no. in an array which is just greater than or equal to x(target)
            //  smallest no. in an array >= x
           
//  Example --> arr = [10,20,30,40,50]  target = 25;
           //  ceil = 30
           //  floor = 20

function floor(arr, target){
let lo = 0;
let hi = arr.length;
while(lo <= hi){
  let mid = Math.floor((lo + hi)/ 2);
  if(arr[mid] < target){
    lo = mid + 1;
  }
  else if(arr[mid] > target){
    hi = mid - 1;
  }
  else {
    return mid
  }
}
return lo - 1;
}
