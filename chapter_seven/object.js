/*--------------------*\
  Object Basics in JS
\*----------------------*/


// With Different primitive Data types combined We Declare an
// Object Data type to specify Information with precision adn Direction for Developers

// Student 1:
// Chemistry: 90
// Higher Math: 80
// Physics: 75
// Biology: 85


// Where Information Declaration with an array Depends on Index number.

// [90,80,75,85]


/*------------------*\
  Object Declaration
\*-----------------*/

//****** Object Literal.*********//

// var obj = {};
// console.log(typeof (obj)); //=====> object

// obj.x = 10;
// console.log(obj)

/*
var point = {
    x: 10,
    y: 20
}

// insert or replace with dot notation

point.y = 25;
point.z = 30;

console.log(point) //====> { x: 10, y: 25, z: 30 }
*/


//******** object constructor *****//

/*
var obj = Object();
obj.a = 10;
console.log(obj);


var obj2 = new Object();
obj2.b = 25;
console.log(obj2)

*/


//******** Accessing Object Properties *****//

// 1. Dot Notation
// 2. Array Notation


var obj = {
    x: 10,
    y: 20,
    z: 30
}


// 1.
/*
console.log(obj.x)
console.log(obj.y)
console.log(obj.z)
console.log(obj.x + obj.y + obj.z);
*/


// 2.
/*
console.log(obj['x']);
console.log(obj['y']);
console.log(obj['z']);
console.log(obj['x'] + obj['y'] + obj['z']);
*/

//******** When should we use Array Notation *****//

// When the Property is Unknown or Dynamic Variable, Example:

/*
// var show = 'x';
var show = 'y';
// var show = 'z';

console.log(obj[show]); //======> 20
*/

//******** Setting or Updating Property *****//

// 1. Setting Something That Does not Exist

/*
obj.a = 25;
obj.b = 50;
obj['c'] = 75

var setD = 'd';
obj[setD] = 100;

console.log(obj); //=====> { x: 10, y: 20, z: 30, a: 25, b: 50, c: 75, d: 100 }
*/

// 2. Updating Existing Values

/*
obj.a = 'apple';
obj['b'] = 'ball'

var updateC = 'c';
obj[updateC] = 'cat'

var updateD = 'd';
obj[updateD] = 'dog';

console.log(obj); //=====>   { x: 10, y: 20, z: 30, a: 'apple', b: 'ball', c: 'cat', d: 'dog' }
*/



//******** Removing Properties *****//

// 1. One way of Deleting Value.

/*
obj.z = undefined;
console.log(obj); //====> { x: 10, y: 20, z: undefined }
*/


// 2. Deleting Whole key value pair/ property

/*
delete obj.z;
console.log(obj); //====> { x: 10, y: 20 }
*/