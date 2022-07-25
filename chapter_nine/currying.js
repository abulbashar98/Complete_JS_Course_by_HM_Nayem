

//******** Currying Function *****//

// Definition: Currying is taking only one argument in one function
// then return the result as a whole from last function using all the the
// other function arguments.

//Example of a normal function:

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(12, 13, 14));


// Example of currying:

function one(a) {
    return function two(b) {
        return function three(c) {
            return function four(d) {
                return a + b + c + d;
            }
        }
    }
}

console.log(one(12)(13)(14)(15));