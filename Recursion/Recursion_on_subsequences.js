function generateSubsequences(input, output){
    if(input.length === 0){
        console.log(output);
        return;
    }
    generateSubsequences(input.slice(1), output + input[0]);
    
    generateSubsequences(input.slice(1), output );
    
}

let inputString = 'abcd';
generateSubsequences(inputString, '');
