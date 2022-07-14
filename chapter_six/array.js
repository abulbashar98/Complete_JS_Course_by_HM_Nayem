

/*--------------------*\
   Working with Arrays
\*---------------------*/

// Array: Array is a Data Structure where we can organize multiple data under a single variable


// Array Literal

var arr = [1, 2, 3, 4, 5];

console.log(arr[0]); //====> 1
console.log(arr[3]); //====> 4
console.log(arr[4]); //====> 5

arr[5] = 6;
console.log(arr); //====> [1, 2, 3, 4, 5, 6]

arr[12] = 13;
console.log(arr); //====> [ 1, 2, 3, 4, 5, 6, <6 empty items>, 13 ]

console.log(arr.length) //====> 13
arr[1] = 22;
console.log(arr); //====>  [ 1, 22, 3, 4, 5, 6, <6 empty items>, 13 ]



// Array Constructor

var arr2 = Array();
console.log(arr2) //====> []

arr2 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(arr2); //====> [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]