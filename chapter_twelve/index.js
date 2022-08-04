/*----------------------------------*\
  Object Oriented Programming in JS
\*----------------------------------*/


//******** Object Literal *****//


/** Note:
 * 1. to call a property inside object we need this to enable dot
 *    notation. like we do outside... e.g  rect.width > this.width
 * 2. Method is a function directly in use of an Object property
 *    space, even the inner function or call back inside method is
 *    a function not a method
 * */

/*

var rectangle = {

    // data
    width: '50px',
    height: '100px',

    // methods
    draw: function () {
        console.log("I am a rectangle")
        console.log("My width is " + this.width);
        console.log("My Height is " + this.height);
    }

}
*/

// rectangle.draw();
/*=====>
I am a rectangle
My width is 50px
My Height is 100px
*/



// rectangle.height = '120px';



// abstraction
// rectangle.draw();
/*=====>
I am a rectangle
My width is 50px
My Height is 120px
*/






//******** this keyword execution *****//

/** Note:
 * 1. this keyword associates with an object, when there is no
 *    object to associate, this keyword associates with window object
 * 2.this keyword value assigns during the executional phase of
 *    execution context. that is why we can change the value of this.
 *
 */


// 3 types of execution behavior of this

// 1. inside an object this. means the whole object and this.
//    executes the properties of this object. both data and method
// 2. this is available everywhere in JS.  Inside of a independent
//    function associates window object, we can associate with an
//    empty object using new keyword
// 3. this will always execute the final values it can detect .






// Example based on 1
/*
var rectangle = {

    // data
    width: '50px',
    height: '100px',

    // methods
    draw: function () {
        console.log("I am a rectangle")
        this.printProperties()
    },

    printProperties: function () {
        console.log("My width is " + this.width);
        console.log("My Height is " + this.height);
        console.log(this)
        //=====> {width: '50px', height: '100px', draw: ƒ, printProperties: ƒ}
    }

}
*/

// rectangle.draw();
/*=====>
I am a rectangle
My width is 50px
My Height is 100px
*/



// Example based on 2
/*
function myFunction() {
    console.log(this);
}
*/
// myFunction()

//===> Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// new myFunction();

//======> myFunction {}





// Example Based on 3
/*
var anotherRect = {
    height: 54,
    width: 40,
    printRect: rectangle.printProperties
}
*/

// anotherRect.printRect()
/*====>
My width is 40
index.js:99 My Height is 54
{height: 54, width: 40, printRect: ƒ}
*/


// Because: printProperties function consists this. and this.
// executes the the property values of the object that contains this.

// rectangle.printProperties(){
//     console.log("My width is " + this.width);
//     console.log("My Height is " + this.height);
// }



//******** Patters to Construct Object *****//

/** Note:
 * 1. Because of the absence of Class in Javascript we can use 2
 *    different template patterns to create object.
 * 2. To maintain a Naming Convention of Constructor, we should
 *    always declare a Constructor Using Capital letter... Built
 *    in Example: (Array, Object, String, Number)
 */


// 1. Factory Pattern
/*
var createRect = function (width, height) {
    return {

        // data
        width: width,
        height: height,

        // methods
        draw: function () {
            console.log("I am a rectangle")
            this.printProperties()
        },

        printProperties: function () {
            console.log("My width is " + this.width);
            console.log("My Height is " + this.height);
            console.log(this)

        }

    }
}
*/


// var rect1 = createRect(40, 49);
// rect1.draw()
/*======>
I am a rectangle
My width is 40
My Height is 49
{width: 40, height: 49, draw: ƒ, printProperties: ƒ}
*/

// var rect2 = createRect(84, 69);
// rect2.draw()
/*======>
I am a rectangle
My width is 84
My Height is 69
{width: 84, height: 69, draw: ƒ, printProperties: ƒ}
*/




// 2. Constructor Pattern

/*
var Rectangle = function (width, height) {

    this.width = width
    this.height = height


    this.draw = function () {
        console.log("I am a rectangle")
        this.printProperties()
    }

    this.printProperties = function () {
        console.log("My width is " + this.width);
        console.log("My Height is " + this.height);
        console.log(this)
    }

}
*/

// var rect3 = Rectangle(50, 57);
// rect3.draw();

//===> Cannot read properties of undefined (reading 'draw')

// Notice: we have used Naming Convention of Constructor Pattern,
//        also we have used this.property to create Constructor,
//        though because of this. is not inside an Object.. it is
//        going to refer window Object, which does not associate
//        with draw or printProperties method .    To solve
//        this problem we can use new keyword to Create an empty
//        object inside Constructor 1st of all, and also assign
//        properties using this. to that empty Object {}.

// Proof:

// var rect4 = new Rectangle(47, 38);
// rect4.draw();

/*=====>
I am a rectangle
My width is 47
My Height is 38
Rectangle {width: 47, height: 38, draw: ƒ, printProperties: ƒ}
*/





//******** new keyword functionalities and implementation *****//

/** Note:
 *  1. We do not have enough knowledge to understand the whole
 *     execution and implementation idea of new yet.
 *  2. Just going to see this and make important notes. Then we
 *     would come back after realizing all those facts.
 *
 */


/** Four massive functionalities of new keyword :
 * 1. Creates an empty object, for this to bind with.. we have known
 *    before this. without any object binds with window object.
 * 2. 2nd functionality is what we have mentioned just now, binds
 *    this. and constructor function arguments with empty object.
 * 3. 3rd it inherits the constructor function prototypes in empty
 *    object, just copy and paste.
 * 4. Returns the empty Object.
 */


// new keyword implementation:
// We cannot implement a shorthand structure in JS. So that we
// are going to create new as a function
/*
function myNew(constructor) {

    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}
*/

// var rect4 = myNew(Rectangle, 45, 30)
// rect4.draw();



//** Constructor Property Constructor Function and  Object in JS **//

// Constructor Property Definition : Every Object in JS has a
// constructor property. Constructor property of an object is a
// reference of some kind of Function patters or Built in Function
// that was in use to Construct that Particular Object.


// We can use Console of Chrome to check few object Constructors

// Example 1:
/*
var Rectangle = function (width, height) {

    this.width = width
    this.height = height


    this.draw = function () {
        console.log("I am a rectangle")
        this.printProperties()
    }

    this.printProperties = function () {
        console.log("My width is " + this.width);
        console.log("My Height is " + this.height);
        console.log(this)
    }

}
*/
/*
var rect1 = new Rectangle(25, 35)

// chrome console
rect1.constructor
*/
/*=====>
ƒ (width, height) {

    this.width = width
    this.height = height


    this.draw = function () {
        console.log("I am a rectangle")
        this.printProperties()
    }

    this.pr…
*/



// Example 2: 
/*
var createRect = function (width, height) {
    return {

        // data
        width: width,
        height: height,

        // methods
        draw: function () {
            console.log("I am a rectangle")
            this.printProperties()
        },

        printProperties: function () {
            console.log("My width is " + this.width);
            console.log("My Height is " + this.height);
            console.log(this)

        }

    }
}
*/

/*
var rect2 = createRect(25, 20)

// chrome console
rect2.constructor
*/
//=====> ƒ Object() { [native code] }

// Notice: the constructor of rect2 is built in Constructor of object
//         with a capital later. (Object).   Built in Code or Native
//         code means the Built in process applied that usually
//         applies when we declare object literal.

// means: both of these are same

var obj = {}
var obj = new Object()

// chrome console
obj.constructor

//=====> ƒ Object() { [native code] }


// Note: We can also Use constructor property and pattern to
//       Get the function reference of other Built in Constructors

// Example : string constructor

var str = String('str');

// chrome console
str.constructor
//====> ƒ String() { [native code] }

console.log(str);
//====> str


// Notice: when we add new to Built in Constructor, data structure
//         of str will change...  

var str2 = new String('str')

str.constructor
//====> ƒ String() { [native code] }

// chrome console
console.log(str2);
/*====>
String {'str'}
0: "s"
1: "t"
2: "r"
length: 3
[[Prototype]]: String
[[PrimitiveValue]]: "str"
*/


// But still valid as a String.

console.log('My array like data structure of str2 object has string fundamentals, see this  ' + str2)

//===> My array like data structure of str2 object has string fundamentals, see this  str

