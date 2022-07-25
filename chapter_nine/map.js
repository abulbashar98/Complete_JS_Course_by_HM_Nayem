
//******** Array Map Method and Implementation*****//

// Built in:

var arr = [1, 2, 3, 4, 5];

/*
var newArr = arr.map(function (value, index, array) {
    return Math.round(Math.random() * 100)

})
console.log(arr) //=====> [ 1, 2, 3, 4, 5 ]
console.log(newArr) //=====> [ 44, 58, 19, 69, 18 ]

// Note: Map function works with the real array and Creates a new one , and return the whole array
//  So that we can store map return in another variable

*/



//******** Implementation using a Call Back Function *****//

// EXAMPLE Problem: Square every number and Return in a new array
/*
function myMap(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var sqr = arr[i] * arr[i]
        newArr.push(sqr);
    }
    console.log(newArr)

}

myMap(arr); //=====> [ 1, 4, 9, 16, 25 ]
*/

// Note: Now can we Solve other problems with our created myMap() method???
// Ans: we can, just need to change the line of task before pushing it in
// the newArr

// this is where call back function is going to be vital, where we are
// going to place a cb() to call in there and make this all abstract for
// user, user just need to give an array and create the function according
// to their task in arguments


// EXAMPLE Problem2: Cube every number through traversing. Console the newArr

function myMap(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp);
    }
    console.log(newArr)

}

myMap(arr, function (value, index, array) {
    return value * value * value;
});
//=====> [ 1, 8, 27, 64, 125 ]

