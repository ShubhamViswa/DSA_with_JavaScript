function sumOfDigits(n){
    n = parseInt(n, 10);
    if( n  === 0){
        return 0;
    }
    return sumOfDigits(Math.floor(n/10)) + (n%10);
}

let sum1 = sumOfDigits(0033);
console.log(sum1);
