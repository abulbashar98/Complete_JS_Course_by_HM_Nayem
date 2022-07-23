

//******** Higher Order Function *****//

// requisites

// 1. We can pass functions as arguments
// 2. We can return functions from another functions


// EXAMPLE:

function add(a, b) {
    return a + b;
}


function calculate(a, b, func) {

    var sum = a + b;
    var diff = a - b;

    // function multiply() {
    //     var m = func(a, b);
    //     return sum * diff * m;
    // }
    // return multiply;

    return function multiply() {
        var m = func(a, b);
        return sum * diff * m;
    }


}

var result = calculate(3, 4, add)

console.log(result());
