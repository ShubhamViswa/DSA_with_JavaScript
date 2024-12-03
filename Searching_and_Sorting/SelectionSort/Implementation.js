//  Selection Sort Implementation

// Step_1 --> divide the arr into 2 parts 
//            a) Sorted region      b) Unsorted region
// Step_2 --> Initially the Sorted Part is empty and the unsorted part is the whole array
// Step_3 --> Now, From the Unsorted Region find the smallest element and Swap that element with the first Element of the Unsorted Region.
// Step_4 --> Update the Sorted Region and Unsorted Region
// Step_5 --> 


function SelectionSort(arr){
  let n = arr.length;
  for(let i = 0; i < n-2; i++){
    let mini = i;
    for(let j = i; j < n-1; j++){
      if(arr[j] < arr[mini]){
        mini = j;
      }
    }
    [arr[j] , arr[mini]] = [arr[mini] , arr[j]]
  }
  return arr;
}
