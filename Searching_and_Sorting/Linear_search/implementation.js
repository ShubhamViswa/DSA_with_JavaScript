

function linearSearch(arr, target){
  for(let i = 0; i<arr.length ; i++){
    if(arr[i] === target){
      console.log("Target found")
      return i;
    }
  }
    return -1
  }
