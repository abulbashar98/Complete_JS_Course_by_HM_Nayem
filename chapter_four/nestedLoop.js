/*-------------- *\
    Nested Loop
\*-----------------*/

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 


var n = 32;

for (var i = 1; i <= n; i++) {

    var result = '';
    for (var j = 1; j <= i; j++) {
        result = result + " " + j;
    }
    console.log(result);
}




// Make a Square of *

// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *


var n = 10;

for (var i = 0; i < 10; i++) {

    var result = '';
    for (var j = 0; j < n; j++) {
        result = result + " " + "*"
    }
    console.log(result);
}