
/*-------------- *\
  Array Traversing
\*-----------------*/

var arr = [6, 7, 5, 4, 8, 24, 7, 8]

/*
arr[0]
arr[1]
arr[2]
arr[3]
arr[arr.length - 1]
*/

/*
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    arr[i] = arr[i] + 2;
}

console.log(arr)
*/



var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

console.log(sum)


for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
} 