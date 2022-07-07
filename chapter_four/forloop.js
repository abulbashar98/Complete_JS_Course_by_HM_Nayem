

/*-------------- *\
  For Loop Structure
\*-----------------*/

/*
for (initializer, condition, change of initial value) {
    CoDe To Execute
}
*/


// using for loop to count and print sum of all even numbers from 0 to 100 


var sum = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log((i) + " + " + (sum) + " = " + (sum += i))
    }
}

console.log("Total = " + (sum));