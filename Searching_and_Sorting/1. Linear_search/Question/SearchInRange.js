//  Question 
// Array = [18, 12, -7, 3, 14, 28];
// Search for 3 in Range of [1,4];

//  implement linear search

function  srchInRng(array, target, strtidx, endidx){
    if(array.length === 0){
        return -1;
    }
    for(let index = strtidx; index <= array[endidx]; index++){
        let element = array[index]
        if(element === target){
            return index+"th index"
        }
    }
    return "target does not exist";
}

let array = [18, 12, -7, 3, 14, 28];
let target = 3;

let call = srchInRng(array, target,1,4);
console.log(call);
