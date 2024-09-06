function secondLargestElement(arr) {
    let largest = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    let secondLargest = -1 ;
    for(let j = 0 ; j<arr.length ; j++){
        if(arr[j] != largest && arr[j]>secondLargest){
            secondLargest = arr[j];
        }
    }
    return secondLargest;
}
let numbers = [1, 3, 2, 5, 7, 10,10,100,100];
console.log(secondLargestElement(numbers));