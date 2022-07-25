

//******** Recursive Function *****//

// Note: ReCursive means to re occur self. Generally we execute repetitive
// task using for loop or while loop.. We can do the same using recursive function as well.

// Recursive function calls itself until a breaking condition apply.

// Example Problem: console log i am calling my self 10 times.

function print(t) {

    if (t === 0) {
        return ''
    }
    console.log('I am calling myself')
    return print(t - 1);
}

console.log(print(10))
/*=======>
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
I am calling myself
*/


// Example Problem 2: Console log the sum of numbers from 1 to 100

function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}

console.log(sum(100)) //=====> 5050


// Example Problem 3: Get  factorials using Recursive.

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); //=====> 120
console.log(factorial(10)); //=====> 3628800
console.log(factorial(20)); //=====> 2432902008176640000
console.log(factorial(30)); //=====> 2.6525285981219103e+32


// Example Problem 4: Calculate the sum of an array.

arr = [1, 2, 3, 4, 5, 6];

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1));  //=====> 21
