function largestElement(arr){
    let largest = arr[0];
    let n = arr.length;
    for(let i = 0; i< n; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr= [1,2,4,7,7,8,4,15];
largest = largestElement(arr);
console.log(largest);