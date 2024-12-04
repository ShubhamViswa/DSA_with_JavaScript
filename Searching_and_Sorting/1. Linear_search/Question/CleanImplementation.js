//  implement linear search

function linearSearch(array, target){
    if(array.length === 0){
        return -1;
    }
    for(let index = 0; index < array.length; index++){
        let element = array[index]
        if(element === target){
            return index+"th index"
        }
    }
    return "target does not exist";
}

let array = [];
let target = -5;

let call = linearSearch(array, target);
console.log(call);
