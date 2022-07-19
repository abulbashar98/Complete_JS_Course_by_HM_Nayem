

//******** Input Section *****//

function add(num1, num2) {

    var result = num1 + num2;
    console.log(result)

}

add(10, 20);
add(65, 35);



// Notice The Repetition of Code

var arr1 = [1, 3, 6];
var arr2 = [11, 3, 36];
var arr3 = [8, 39, 61];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {

    sum1 += arr1[i]

}
// console.log(sum1); //=====> 10

var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {

    sum2 += arr2[i]

}
// console.log(sum2); //=====> 50

var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {

    sum3 += arr3[i]

}
// console.log(sum3); //=====> 108



// To solve this we can create a function

function sumOfArray(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        sum = sum + arr[i]

    }
    console.log(sum);

}

sumOfArray(arr1); //=====> 10
sumOfArray(arr2); //=====> 50
sumOfArray(arr3); //=====> 108



//******** Argument Object in JS *****//

// NOTE: Argument is an ARRAY like Object in JS. We can Access given DATA by user using THis argument object. even when we are not receiving them in JS.  EXAMPLE:


/*/
function test(a, b, c) {

    console.log(arguments);
    console.log(typeof (a))

}

test();
//=====>  [Arguments] {}
//=====> undefined


test(10, 20, 30);
//======> [Arguments] { '0': 10, '1': 20, '2': 30 }
//=====> Number

*/


// Notice Argument is am Object But Returning with Index Number as Keys.
// We can Traverse this Object like an Array.
// Without even receiving them as parameters.
// Example:


function test() {

    console.log(arguments);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }

}

test(15, 34, 65);

/*=====>
[Arguments] { '0': 15, '1': 34, '2': 65 }
15
34
65
*/

// Example2:

function sumOfAllNumbers() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

sumOfAllNumbers(1, 3, 6); //=====> 10
sumOfAllNumbers(11, 13, 16); //=====> 40 
sumOfAllNumbers(21, 23, 26); //=====> 70

