

// 1. && 2. ||   3. !



1.

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if (a < b && c < d) {
    console.log("A is less than B and C is less than D, Both are True")
}

else {
    console.log("At least one of them is a false Condition")
}






// 2.


// A || B
// true && true = true
// true && false = true
// false && true = true
// false && false = false




if (a > b || c < d) {
    console.log("At least one of them is a true condition");
}

else {
    console.log("Both of them are false")
}


// 3.


var check = !(a > b); //===> true
var check = !!(a > b)  //===> false
var check = !!!(a > b) //=====> true
console.log(check)