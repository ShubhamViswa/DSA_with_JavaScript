function secondLargest(arr){
    let n = arr.length;
    let largest = arr[0];
    let secondLargest = -1;
    for(let i = 0; i<n; i++){
        if(arr[i]>largest ){
            secondLargest = largest;
            largest = arr[i];
        }if(arr[i]>secondLargest && arr[i] < largest ){
            secondLargest = arr[i];
        }
    }
    return {largest,secondLargest};
}

let arr = [1,2,4,7,7,5];
console.log(secondLargest(arr));