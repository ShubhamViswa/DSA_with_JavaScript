/**
 * This is the Brute force approach in this approach we are using build-in sort method to sort the given array
 */


function largestElement(arr){
    arr.sort((a,b)=>a-b);
    let largest = arr[arr.length-1];
    return largest;
}
let number = [2,5,11,8];
let largest = largestElement(number);
console.log(largest);