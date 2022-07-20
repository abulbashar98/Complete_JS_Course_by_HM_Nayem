
//******** Function Expression in JS *****//

/*
// normal function
function sumOfAllNumbers() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
sumOfAllNumbers(1, 2, 3, 4)
*/


/*
// we can store a function in a variable, this is known as
// Function Expression... Example:

var addition = function sumOfAllNumbers() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
addition(1, 3, 4); //====> 8
*/


// now because we have a name of this variable, we do not need to
// name the function also... function without a name is known as anonymous
// function... EXAMPLE: 

var addition = function (a, b) {
    return a + b;
}

// console.log(addition(12, 13));
//=====> 25

// we can store the expression in another variable and use that also

var sum = addition
console.log(sum); //=====> [Function: addition]
console.log(sum(12, 13)); //=====> 25


//******** Example of Built in Anonymous and Asynchronous Function *****//

setInterval(function () {
    console.log('tik tok')
}, 1000)



