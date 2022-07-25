
//******** Array Filter Method and Implementation*****//

// Built in:

var arr = [1, 23, 3, 44, 15, 62, 71, 85, 99, 66, 54, 7, 33, 56, 43, 35];

/*
var filteredArray = arr.filter(function (value) {
    return value % 2 === 0;
})

console.log(filteredArray);

// Note: Filter function works with the real array and Creates a new one
// depending on the conditional logic given  , and returns the new array
// So that we can store Filter return in another variable

//======> [ 2, 4, 6, 8 ]
*/


//******** Implementation using a Call Back Function *****//

// EXAMPLE Problem: filter all the even values and return in a new Array
/*
function myFilter(arr) {

    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

var filteredArray = myFilter(arr);
console.log(filteredArray)
*/

// Note: Now can we Solve other problems with our created myFilter() method???
// Ans: we can, just need to change the conditional logic as our requirement

// this is where call back function is going to be vital, where we are
// going to place a cb() to call in there and make this all abstract for
// user, user just need to give an array and create the function with a
// conditional logic that returns a Boolean value in our myFilter() condition


// EXAMPLE Problem2: Filter all the values Greater than 40

/*
function myFilter(arr, cb) {

    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

var filteredArray = myFilter(arr, function (value, index, array) {
    return value > 40;
});
console.log(filteredArray)

//====> [   44, 62, 71, 85, 99,66, 54, 56, 43     ]
*/


// EXAMPLE Problem2: Filter all the values at Even index

function myFilter(arr, cb) {

    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

var filteredArray = myFilter(arr, function (value, index, array) {
    return index % 2 === 0;
});

console.log(filteredArray);

//=====> [1,  3, 15, 71, 99, 54, 33, 43]

