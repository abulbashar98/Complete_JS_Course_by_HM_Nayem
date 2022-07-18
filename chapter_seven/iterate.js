/*-------------- *\
  Iterate An Object
\*-----------------*/

var obj = {
    a: 10,
    b: 20,
    c: 40,
    d: 80
}



// 1.
//******** in Operator  *****//

console.log('a' in obj); //====> true
console.log('x' in obj); //====> false
console.log('d' in obj); //====> true



// 2.
//******** for in Loop *****//

for (var k in obj) {

    console.log(k); //=====> a b c d
    console.log(obj[k]); //=====> 10 20 40 80

    console.log(k + ': ' + obj[k]); //=====> a: 10 b: 20 c: 40 d: 80

}
