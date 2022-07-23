

//******** First Class Function *****//


function add(a, b) {
    return a + b;
}


// requisites

// 1. A function can be stored in a Variable

var sum = add
console.log(sum) //=====> [Function: add]
console.log(sum(12, 13)) //======> 25


//  2. A function can be stored in an Array

var arr = [];
arr.push(1)
arr.push(2)
arr.push(add)

console.log(arr) //=====> [ 1, 2, [Function: add] ]

console.log(arr[2](25, 25)) //=====> 50


// 3. A function can be stored in an Object

var obj = {
    sum: add,
}
console.log(obj)  //=====> { sum: [Function: add] }

console.log(obj.sum(75, 75)) //=====> 150



// 4. We can create a function wherever we need

setInterval(function () {
    console.log('Tik Tok')
}, 1000)


// Note: So we can say now that function in JS can be firs class function