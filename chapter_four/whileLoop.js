

/*----------------------*\
    While Loop Structure
\*------------------------*/

/*
var something = "some value of number or Boolean";

while (condition of something) {

Execute Some Code.

Terminate at With a condition of Something

}

*/


// Example

var isOk = true;

while (isOk) {

    var randomNumber = Math.ceil(Math.random() * 10)

    if (randomNumber === 7) {
        console.log('You are in Heaven, got ' + (randomNumber))
        isOk = false;
    }

    else {
        console.log('Hell, you got ' + (randomNumber))
    }

}