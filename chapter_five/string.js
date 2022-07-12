/*-------------- -------*\
  String In JavaScript
\*------------------------*/


// 'String' "string"
// ['s', 't', 'r', 'i', 'n', 'g'] ======> String in C language;



// String Literal 

var str = 'Something';

// String Constructor
var str2 = String("Something");
var n = 10;
var str = n + '';
var str = n.toString();
var str = String(n);
console.log(str);


/*-------------- *\
  Escape Notation
\*-----------------*/

// var str = 'this is a 'string' '

var str = "this is a 'string'"
console.log(str)

// 1.
var str2 = 'this is a \'string\''
console.log(str2)

// 2.
var str3 = 'this is a \nString'
console.log(str3)

// 3.
var str4 = 'this is a \tString'
console.log(str4)

// 4.
var str5 = 'this is a \\string'
console.log(str5)




/*-------------------- *\
    String Comparison
 \*-----------------------*/

var a = 'abc';
var b = 'bcd';

console.log(a === b);
console.log(a > b);
console.log(a < b);


// Javascript Uses  Lexicographic System to Compare to String

/*-------------- *\
   Lexicographic
\*-----------------*/

// Lowercase > Uppercase 

// z > y > x > w > .... c  > b > a > Z > Y > X > W > ...... C > B > A


console.log('a' > 'Z') //=====> true

console.log('abc' < 'bcd')   //=====> true

// 2nd Character Comparison
console.log('abc' > 'acc')   //=====> false


// Javascript Engine Converts string in to a number to Compare.

console.log(parseInt('001')); //=====> 1

console.log('001' == 1) //=====> true




/*-------------- *\
   String Methods
\*-----------------*/

// 1. concat()
// 2. substr()
// 3. charAt()
// 4. startsWith()
// 5. endsWith()
// 6. toUpperCase()
// 7. toLowerCase()
// 8. trim()
// 9. split()


var a = 'I am'
var b = 'a Developer'


// 1.
var c = a.concat(' ' + b);
console.log(c) //=====> I am a Developer

// 2.
console.log(c.substr(7))   //====> Developer
console.log(c.substr(7, 3)) // ====> Dev

// 3.
console.log(c.charAt(7)) //===> D
console.log(c.charAt(10)) //===> e

// 4.
console.log(c.startsWith('I')) //=====> true

// 5.
console.log(c.endsWith('r'))  //=====> true
console.log(c.endsWith('developer'))  //=====> false
console.log(c.endsWith('Developer'))  //=====> true

// 6. 
console.log(c.toUpperCase()) //=====> I AM A DEVELOPER

// 7.
console.log(c.toLowerCase()) //=====> i am a developer

// 8. 
var str = '     fasfasfsafasfdsadf       '
console.log(str) //=====>      fasfasfsafasfdsadf
console.log(str.trim()) //=======> fasfasfsafasfdsadf

// 9.
console.log(c.split(' '));  //=====> [ 'I', 'am', 'a', 'Developer' ]




/*-------------- *\
   String Length
\*-----------------*/


var str = "What is the length of this line?"
console.log(str.charAt(0)); //====>  W
console.log(str.charAt(12)); //====>  l
console.log(str.charAt(52)); //====>  ''




// Construct loop to get length value using charAt() == ''

var length = 0;

while (true) {
    if (str.charAt(length) == '') {
        break;
    }
    else {
        length++
    }
}

console.log(length)  //====> 32


// Built in Method to Get Length Value

console.log(str.length); //====> 32
console.log('afadfakafadfjkk khalkafadsfafdfhlkf kfasdfadfadfafafdkhsdfl'.length) //====> 59
