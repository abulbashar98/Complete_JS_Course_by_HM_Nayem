
/*-------------- *\
  Reverse an Array
\*-----------------*/


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Solve i can think of....

/*
var reverse = []

for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    reverse.unshift(element);
}

arr = reverse;

console.log(arr);
*/


// Solve by HM Nayem.

/*
for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp
}

console.log(arr);
*/


// built in Method to solve this

console.log(arr.reverse())
