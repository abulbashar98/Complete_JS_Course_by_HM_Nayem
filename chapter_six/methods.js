
/*--------------------*\
  Array Simple Methods
\*----------------------*/

// 1. join();
// 2. fill();
// 3. concat()
// 4. isArray
// 5. Array.from

var arr = [1, 2, 3, 4, 5, 6]

// 1.
// console.log(arr);
// console.log(arr.join(' , '))  //======> 1 , 2 , 3 , 4 , 5 , 6

// 2.
// console.log(arr.fill(0)) //=====> [0,0,0,0,0,0,0]

//  3.
// var arr2 = [43, 43, 66, 4, 7, 3, 2, 878, 54];

// var arr3 = arr.concat(arr2);
// console.log(arr3) //=====> [1,   2,  3, 4, 5, 6, 43,  43, 66, 4, 7, 3,2, 878, 54]

// 4.

// console.log(Array.isArray(arr2)) //=====> true


// 5.

// var arr2 = Array.from(arr);
// console.log(arr2);

// Qus: We can do that using var arr2 = arr, why do we use Array.from() ???

// Ans: Because Array is a Mutable Object

var arr2 = arr;
console.log(arr2) //=====> [ 1, 2, 3, 4, 5, 6 ]
console.log(arr)  //=====> [ 1, 2, 3, 4, 5, 6 ]


// Notice 

arr2[0] = 555

console.log(arr2) //====> [ 555, 2, 3, 4, 5, 6 ]
console.log(arr)  //=====> [ 555, 2, 3, 4, 5, 6 ]


// Using Array.from() to copy 

var arr3 = [1, 2, 3, 4, 5, 6]
var arr2 = Array.from(arr3);

console.log(arr3) //=====> [1, 2, 3, 4, 5, 6]
console.log(arr2) //=====> [1, 2, 3, 4, 5, 6]

// Notice does not effect

arr2[0] = 555;
console.log(arr2); //=====> [ 555, 2, 3, 4, 5, 6 ]
console.log(arr3); //=====> [ 1, 2, 3, 4, 5, 6 ]



