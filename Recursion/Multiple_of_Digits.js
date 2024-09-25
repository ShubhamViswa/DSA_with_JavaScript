function multipleOfDigits(n){

    if( n % 10 == n){
        return n;
    }
    // let sumDigitTotal =  sum;

    return multipleOfDigits(Math.floor(n/10)) * (n%10);
}

let multiple1 = multipleOfDigits(30433);
console.log(multiple1);
