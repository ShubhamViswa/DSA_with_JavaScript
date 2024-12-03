// implementing bubble sort


let arr =  [34, 7, 89, 22, 45,1,2,4,3,44];
let n = arr.length;
for(let i = 0; i < n-1; i++){
  for(let j = 0; j < n-i-1; j++){
    if(arr[j] > arr[j+1]){
      
      // swap 
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
