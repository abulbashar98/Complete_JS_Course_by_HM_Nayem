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
// 3. this will always execute the final values it can detect.






// Example based on 1

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


// rectangle.draw();
/*=====>
I am a rectangle
My width is 50px
My Height is 100px
*/



// Example based on 2

function myFunction() {
    console.log(this);
}

// myFunction()

//===> Window {window: Window, self: Window, document: document, name: '', location: Location, …}


new myFunction();

//======> myFunction {}





// Example Based on 3

var anotherRect = {
    height: 54,
    width: 40,
    printRect: rectangle.printProperties
}

anotherRect.printRect()
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






