
var n = 49;
var str = '';

if (n % 2 === 0) {
    str = 'EVEN';
}

else {
    str = "ODD"
}

console.log(str);


/*-------------- *\
  Ternary Structure
\*-----------------*/

// condition ? true Side : false Side
// To Check a Simple Logic having maximum 2 results possible, Like Coin Toss;


// Example: 

var result = (n % 2 === 2) ? 'EVEN' : 'ODD';
console.log(result);