



//******** Define Pure Functions *****//

`
** requisites

 1. It returns the same result if given the same arguments
 
 2. It does not cause any observable side effects 
`

// EXAMPLE: 

function sqr(n) {
    return n * n
}

console.log(sqr(4));
console.log(sqr(4));
console.log(sqr(4));



// Example of causing Side Effect

var n = 10;

function change() {
    n = 1000;
}
console.log(n); //=====>  10

change();
console.log(n); //=====> 1000

// One more Example of Non-pure function causing Side effect


var point = {
    x: 10,
    y: 25
}

function printPoint(point) {

    point.x = 101;
    point.y = 251

    console.log(point)
}

printPoint(point); //=====> { x: 101, y: 251 }

// Notice

console.log(point) //=====> { x: 101, y: 251 }
