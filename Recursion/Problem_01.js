// Problem --> Print Your Name n times

console.log(`Ok You want to print Your Name.. then,`)
let name = prompt("Enter Your Name: ");
let n = prompt(`How many times you want to print Your Name `);
let i = 1;
// console.log(`Your Name is ${name} `);

function f(i,n){
    if(i>n){
        return;
    }
    console.log(`Your Name is ${name} `);
    f(i+1,n);
    return ;
}

f(i,n);

