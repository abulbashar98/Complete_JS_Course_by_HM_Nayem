
/*-------------- *\
 Return From Function
\*-----------------*/

/*
function sumOfAllNumbers() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    console.log(sum)
}

// sumOfAllNumbers(1, 2, 3, 4) //=====> 10

// Notice the no Data or Value was returned to be stored in a var...

var result1 = sumOfAllNumbers(1, 3, 4, 5, 6, 7)
console.log(result1); //=====> undefined

*/


// To Use the Outcome of a function we need to return the final value..


function sumOfAllNumbers() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
    return sum;

}

sumOfAllNumbers(1, 2, 3, 4, 5); //=====> 15;
var result2 = sumOfAllNumbers(1, 3, 4, 5, 67, 43);

// at this point the function was called and because a value was returned
// by the function, result was stored in variable-> result2, we can test in
// console or use that value by using the variable anywhere...



console.log(result2);


// NOTE: Processing can also be done inside the return method, very widely
// seen in React.js... EXAMPLE: 

function personDetailsObjectified(name, email) {

    return {
        Name: name,
        Email: email
    }

}

var p1 = personDetailsObjectified("Abul Bashar", 'ab86@yahoo.com')
console.log(p1);
//=====> { Name: 'Abul Bashar', Email: 'ab86@yahoo.com' }



