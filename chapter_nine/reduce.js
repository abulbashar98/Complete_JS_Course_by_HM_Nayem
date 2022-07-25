

//******** Array Reduce Method and Implementation*****//

// Built in:

var arr = [1, 2, 3, 54, 4, 5];
/*
var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
}, 0)

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr);
}, arr[0])

var min = arr.reduce(function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])



console.log(sum); //====> 69
console.log(max); //====> 54
console.log(min); //====> 1


*/






//******** Implementation using a Call Back Function *****//

// Note: acc = accumulator or initializer.

/*
// EXAMPLE Problem: Calculate Sum of an Array.


function myReduce(arr, cb, acc) {

    for (var i = 0; i < arr.length; i++) {

        acc = cb(acc, arr[i])

    }
    return acc;

}

var sum = myReduce(arr, function (prev, curr) {

    return prev + curr;

}, 0)

console.log(sum);
*/

// EXAMPLE Problem2: Find the Maximum value.


function myReduce(arr, cb, acc) {

    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc;
}

var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, arr[0])

console.log(max); //=====> 54


// EXAMPLE Problem2: Find the Minimum value.

var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr);
}, arr[0])

console.log(min); //=====> 1