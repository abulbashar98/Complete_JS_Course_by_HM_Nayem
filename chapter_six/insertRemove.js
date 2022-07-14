/*---------------------------------------*\
 Insert and Remove Element Using Splice()
\*----------------------------------------*/


var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Insert 9 on Index 3.

// arr[3] = 9;
// arr.push(9);
// arr.unshift(9)

// Splice Structure:  splice(start, deleteCount, Replacements)

arr.splice(3, 0, 9);

console.log(arr) //=======> [  1, 2, 3, 9, 4,5, 6, 7, 8]


// Remove 9 from index 3.

// arr[3] = null; //=====>   [  1, 2, 3, null,  4, 5, 6, 7,8]
// arr.pop();
// arr.shift()

arr.splice(3, 1)


console.log(arr) //=====> [1, 2, 3, 4, 5, 6, 7, 8]
