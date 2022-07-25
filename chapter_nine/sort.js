
//******** Array Sort, Some and Every Method *****//



var persons = [
    {
        name: 'Abul Bashar',
        age: 24
    },
    {
        name: 'Tanjin Tania',
        age: 34
    },
    {
        name: 'Abu Naim Heera',
        age: 36
    },
    {
        name: 'Aamir khan',
        age: 57
    },
    {
        name: 'Sachin Tendulkar',
        age: 50
    },
]

// Cans Sort simple array with all integers //

var arr = [1, 2, 3, 4, 5, 6, 3, 4, 4, 1, 2, 3, 7, 8, 6, 7, 9, 6]


arr.sort();
console.log(arr) //=====>[1, 1, 2, 2, 3, 3, 3,4, 4, 4, 5, 6, 6, 6,7, 7, 8, 9]

// sorts in ascending order.


// Can't sort correctly an Array consist of negative numbers //
// Example

var arr2 = [1, -2, 3, 4, 5, 6, 3, -4, 4, 1, 2, 3, 7, -8, 6, 7, 9, 6]

arr2.sort()
console.log(arr2); //=====> [-2, -4, -8, 1, 1, 2, 3, 3,  3,  4, 4, 5, 6, 6,6,  7,  7, 9];

// 1st Descending Then Ascending


// Also cant sort and array consisting objects //

persons.sort();
console.log(persons);
/*=====>[
  { name: 'Abul Bashar', age: 24 },
  { name: 'Tanjin Tania', age: 34 },
  { name: 'Abu Naim Heera', age: 36 },
  { name: 'Aamir khan', age: 57 },
  { name: 'Sachin Tendulkar', age: 50 }
]
*/

//******** To Solve all this problems We can use JS quick sort algorithm and call back function *****//


// Example Problem 1: Sort an Array in ascending order consisting of negative numbers 


var res1 = arr2.sort(function (a, b) {
    if (a > b) {
        return 1
    }
    else if (a < b) {
        return -1
    }
    else {
        return 0
    }
})

console.log(res1); //====> [ -8, -4, -2, 1, 1, 2, 3, 3,  3,  4, 4, 5, 6, 6, 6,  7,  7, 9]



// Example Problem 2: Sort an Array in descending order consisting of negative numbers 


var res2 = arr2.sort(function (a, b) {
    if (a > b) {
        return -1
    }
    else if (a < b) {
        return 1
    }
    else {
        return 0
    }
})

console.log(res2); //====> [ 9,  7,  7,  6, 6, 6, 5,4,  4,  3,  3, 3, 2, 1, 1, -2, -4, -8]


// Example Problem 3**: Sort an Array consisting Objects.


var personsSort = persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    else if (a.age < b.age) {
        return -1
    }
    else {
        return 0
    }
})

console.log(personsSort);


//******** Array some and Every Method *****//

// check if some values of Array 2 is negative??
var someRes = arr2.some(function (value) {
    return value < 0;
})

console.log(someRes) //=====> true



// check if every value of Array 1 is positive??
var everyRes = arr.every(function (value) {
    return value > 0;
})

console.log(everyRes); //=====> true 