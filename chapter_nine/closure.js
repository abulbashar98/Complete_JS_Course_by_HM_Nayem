

//******** Closure First Look *****//


// Anything that pass through Scope into a function without argument is a closure

// Example: from global to function scope

var a = 10;

function closure() {
    console.log(a)
}

closure(); //=====> 10


// Example 2: From Parent to child function scope..


function parent() {

    var ab = 25

    return function () {
        console.log(ab)
    }

}

var abc = parent()
console.dir(abc)  // Copy Code and run in a browser Console