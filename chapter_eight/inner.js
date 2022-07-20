

//******** Inner Function in JS *****//


/*
function something(greet, name) {

    function sayHi() {
        console.log(greet, name)
    }

    // Notice the fact that sayHi function has access to the arguments
    // of something function.

    sayHi();
    // has to be invoked inside the parent function.
}

something('Good Morning', 'AB');
*/


// EXAMPLE 2:

// how an inner or nested can be useful,,

function greet(name, greet) {

    // console.log(greet, name); //====> Good Morning Abul Bashar Mim

    function getMiddleName() {

        if (name) {

            return name.split(' ')[1]

        }

        else {
            return '';
        }

    }

    var message = greet + ' ' + getMiddleName();
    return message;

}

console.log(greet('Abul Bashar Mim', 'Good morning'))

