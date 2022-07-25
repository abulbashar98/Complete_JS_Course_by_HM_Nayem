

//******** Composition In Functional Programming *****//

// Definition: In simple terms, function composition is, giving one functions output as other functions input.

// Simple example of this is when we console.log(a function)
// where we are actually giving log function an input of function that will
// implicitly or explicitly returns an output


// Broader Example:

function print(result) {
    console.log(result)
}

function sum(a, b) {
    return a + b;
}

function multipliedBy5(n) {
    return n * 5;
}


// Example Problem: Take two random numbers, calculate the summation of them, multiply sum by 5, then print the result. 

print(multipliedBy5(sum(12, 13))); //======> 125


