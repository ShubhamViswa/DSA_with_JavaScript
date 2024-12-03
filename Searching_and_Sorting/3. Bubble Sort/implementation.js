// implementing bubble sort


let arr =  [34, 7, 89, 22, 45,1,2,4,3,44];
let n = arr.length;
for(let i = 0; i < n-1; i++){
  for(let j = 0; j < n-i-1; j++){
    if(arr[j] > arr[j+1]){
      
        // swap 
      
      [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
      
    //   let temp = arr[j];
    //   arr[j] = arr[j+1];
    //   arr[j+1] = temp;
    }
  }
}

console.log(arr);

// Optimized Bubble sort

let arr =  [34, 7, 89, 22, 45,1,2,4,3,44];
let n = arr.length;
for(let i = 0; i < n-1; i++){
  let swapped = false;
  for(let j = 0; j < n-i-1; j++){
    if(arr[j] > arr[j+1]){
      
        // swap 
      
      [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
      swapped = true;
    //   let temp = arr[j];
    //   arr[j] = arr[j+1];
    //   arr[j+1] = temp;
    }
  }
  if(!swapped) = false;
}

console.log(arr);

//  Time complexity of this code is O(n^2);
//  Space Complexity is auxaliry Space O(1);
