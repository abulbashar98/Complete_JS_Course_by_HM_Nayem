

/*-------------- *\
  Scope In JS
\*-----------------*/


/*
var a = 'global';

if (true) {
    console.log(a); //======> global
    // Notice that this block created by if{} can access the global 
    // variable, because it is a child of global Object.

    var b = 'if block'
    // const b = 'if block'
}

// using var to create a variable in child scope does not prevent 
// access in global object. Problem solved in Es6;
console.log(b);


// But the function block does maintain the scope of children with var also
// example:

function a() {
    var a = 'change to function scope value'
}

console.log(a) //=====> global.

// but the storage can be shared to a child function.



function a1(name) {
    var a = 'change to function scope value'

    function b() {
        console.log(a)
        console.log(name)
    }
    b()
}

a1('AB');

//=====> change to function scope value
//=====> AB




// Parent does not have access to global

function parent() {

    function child() {
        var something = 'something'
    }

    console.log(something); //=====>

}
*/

//******** Use of Inner function and Scope *****//


function filterDivisibleByBoth(n) {

    function a() {
        return n % 3 === 0;
    }

    function b() {
        return n % 5 === 0;
    }

    if (a() && b()) {

        console.log("Divisible by Both");

    }

    else {
        console.log("not a valid number");
    }


}

filterDivisibleByBoth(10); //=====> not a valid number
filterDivisibleByBoth(15); //=====> Divisible by Both