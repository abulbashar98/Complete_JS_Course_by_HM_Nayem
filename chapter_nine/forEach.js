
//******** For Each Method and Implementation*****//

// Built in:

var arr = [1, 2, 3, 4, 5];
/*
var storage = arr.forEach(function (value, index, array) {
    console.log(value, index, array);

})
console.log(storage)

// Note: ForEach function works with the real array, and does not return
// anything new. So that we cannot store forEach in another variable
*/
/*======>
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
*/
//======> undefined



//******** Implementation using a Call Back Function *****//

// EXAMPLE Problem: Console Value Index and Arr With Traversing

/*
function myForEach(arr) {

    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i], i, arr)
    }
}

myForEach(arr)
*/
/*=====>
        1 0 [ 1, 2, 3, 4, 5 ]
        2 1 [ 1, 2, 3, 4, 5 ]
        3 2 [ 1, 2, 3, 4, 5 ]
        4 3 [ 1, 2, 3, 4, 5 ]
        5 4 [ 1, 2, 3, 4, 5 ]
        */


// Note: Now can we Solve other problems with our created myForEach() method???
// Ans: we can, just need to change the line of console.log() inside for loop

// this is where call back function is going to be vital, where we are
// going to place a cb() to call in there and make this all abstract for
// user, user just need to give an array and create the function according
// to their task in arguments


// EXAMPLE Problem2: Cube every number through traversing. Console the arr

function myForEach(arr, cb) {

    for (var i = 0; i < arr.length; i++) {

        cb(arr[i], i, arr);
    }
}

myForEach(arr, function (value, index, array) {
    arr[index] = value * value * value;
})

console.log(arr); //=====> [ 1, 8, 27, 64, 125 ]



