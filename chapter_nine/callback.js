

//******** Call Back Function *****//


/*

function sample(a, b) {

    var c = a + b;
    var d = a - b

    var result = sum(c, d)

    return result

}

function sum(a, b) {
    return a + b;
};

console.log(sample(5, 8))

// The function sum() inside sample is Callback function 
*/


// We can make this call back dynamic using the same Sample to call from


// 1. using a pre declared function as call back

function sample(a, b, cb) {

    var c = a + b;
    var d = a - b

    var result = cb(c, d)

    return result

}

function sum(a, b) {
    return a + b;
};

var result = sample(5, 8, sum)
console.log(result)


// 2. or by creating a function as Callback instantly...
// with some abstraction of sample function and choice of call back 
// task function for user

function sample(a, b, cb) {

    var c = a + b;
    var d = a - b

    var result = cb(c, d)

    return result

}

function sum(a, b) {
    return a + b;
};
// subtraction
var result2 = sample(5, 8, function (c, d) {
    return c - d
})
console.log(result2)

// multiplication 

var result3 = sample(5, 8, function (c, d) {
    return c * d;
})
console.log(result3)


// division 
var result4 = sample(5, 8, function (c, d) {
    return c / d;
})
console.log(result4)

