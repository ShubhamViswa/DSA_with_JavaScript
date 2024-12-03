// Implementation of Insertion Sorting Algorithm
//  
// In insertion sort we pick the first element from our array and put that element at the it's correct position by comparing from the index[0] to index[n-1]
// 
// 

function InsertionSort(arr){
  let n = arr.length;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(arr[j] > arr[j+1]){
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
      }
    }
  }
}
