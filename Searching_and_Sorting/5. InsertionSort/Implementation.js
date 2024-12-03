// Implementation of Insertion Sorting Algorithm
//  
// In insertion sort we pick the first element from our array and put that element at the it's correct position by comparing from the index[0] to index[n-1]
// 
// 

function InsertionSort(arr){
     let n = arr.length;
     for(let i = 1; i<n; i++){
         let ith_val = arr[i];
         let j = i-1;
         while(j>=0 && arr[j] > ith_val){
            //  Shift 
            arr[j+1] = arr[j];
            j--;
         }
         arr[j+1] =  ith_val;
     }
 }
 
 let arr = [5, 3, 8, 6, 2];
InsertionSort(arr);
console.log(arr); 
