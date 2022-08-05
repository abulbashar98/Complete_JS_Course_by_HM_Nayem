

/*-------------- *\
  Search In Array
\*-----------------*/


var arr = [34, 65, 44, 3, 57, 3, 25, , 7, 55, 23, 66, 78, 45, 77, 89, 33]

arr.find(3);

var find = 3;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data Found in Array Index of' + i)
        isFound = true;
        break;
    }
}

if (!isFound) {
    console.log('data not found')
}
