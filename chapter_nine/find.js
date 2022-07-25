


//******** Array Find and FindIndex Method and Implementation*****//

// Built in:

var arr = [1, 23, 3, 44, 15, 62, 71, 85, 99, 66, 54, 7, 33, 56, 43, 35];

/*
var findResult = arr.find(function (value, index) {
    return value === 66;
})
console.log(findResult) //======> 66

var findResult2 = arr.find(function (value, index) {
    return value === 27;
})
console.log(findResult2) //======> undefined


// Note: Find function works with the real array and returns only the value
// depending on the conditional logic given  ,  So that we can store Find
// function return in another variable

*/


//******** Implementation using a Call Back Function *****//

// EXAMPLE Problem: find the value of 43
/*
function myFind(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i]
        }
    }
}

var findResult = myFind(arr, 43);
console.log(findResult); //======> 43


// Note: Now can we Solve other problems with our created myFind() method???
// Ans: we can, just need to change the conditional logic as our requirement

// this is where call back function is going to be vital, where we are
// going to place a cb() in place of logic to call in there and make this
// all abstract for user, user just need to give an array and create
// the function with a value that returns a the value if exists or
// else returns undefined
*/

// EXAMPLE Problem2: find  number 66

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
}

var findResult2 = myFind(arr, function (value) {
    return value === 66
});
console.log(findResult2) //====> 66





