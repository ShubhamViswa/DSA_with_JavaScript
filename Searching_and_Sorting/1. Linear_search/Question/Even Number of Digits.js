// Question Link --> [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/]


/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(arr) {
    let evenDigit = 0;
 for(let i = 0; i<arr.length; i++){
     
     let n = arr[i];

    // 🤡🤡
    // Time Complexty o(n*d)

    //  let cnt = 0;
    //  while(n>0){
    //    cnt++;
    //    n = Math.floor(n / 10 );
    //  }

    // 
    

    // 💀💀
    // Using Math Formula 
    // Time Complexity O(n)
    // let digitCount = Math.floor(Math.log10(n)) + 1;

     
    //  if(digitCount % 2 === 0){
    //     evenDigit++;
    //  }

    // 🗿
    // More Advanced Version
    //  Time Complexity --> o(n)
    if((n>=10 && n<=99) || (n>=1000 && n<=9999) || (n>=100000 && n<= 999999)){
        evenDigit++
    }
 }
 return evenDigit;
};
