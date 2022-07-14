
/*-----------------------*\
   Multidimensional Array
\*-----------------------*/

var arr = [
    [78, 76, 87, 90],
    [67, 75, 72, 75],
    [77, 87, 84, 93]
]

console.log(arr[0][0]);  //=====> 78
console.log(arr[1][1]);  //=====> 75
console.log(arr[2][2]);  //=====> 84


for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
        console.log('Element' + i + ':' + arr[i][j])
}

/*=====> 
Element0:78
Element0:76
Element0:87
Element0:90
Element1:67
Element1:75
Element1:72
Element1:75
Element2:77
Element2:87
Element2:84
Element2:93
*/
