
/*-------------- *\
 Methods of Objects
\*-----------------*/

// 1. Object.keys
// 2. Object.values
// 3. Object.entries
// 4. Object.assign ***



var obj = {
    a: 10,
    b: 20,
    c: 40,
    d: 80
};


// 1. Returns keys in an Array

console.log(Object.keys(obj))  //=====> [ 'a', 'b', 'c', 'd' ]

// 2. Return values in an Array

console.log(Object.values(obj)); //=====> [ 10, 20, 40, 80 ]

// 3. Returns key and value pairs in Multidimensional Array

console.log(Object.entries(obj)) //=====>  [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 40 ], [ 'd', 80 ] ]



// 4. Can Copy an Object without having to share the Memory Reference

var obj1 = {
    a: 10,
    b: 20,
    c: 30
}

// Notice The Problem
/*
var obj2 = obj1;

obj2.a = "ten";

console.log(obj2) //====> { a: 'ten', b: 20, c: 30 }
console.log(obj1) //====> { a: 'ten', b: 20, c: 30 }
*/



// To solve this we can use a method
/*
var obj2 = Object.assign({}, obj1);

console.log(obj2); //====> { a: 10, b: 20, c: 30 }

obj2.a = "ten";
console.log(obj2);  //====> { a: 'ten', b: 20, c: 30 }
console.log(obj1);  //====> { a: 10, b: 20, c: 30 }
*/
