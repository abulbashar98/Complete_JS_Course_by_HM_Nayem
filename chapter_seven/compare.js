
/*-------------- *\
  Comparing Objects
\*-----------------*/
/*
var obj1 = {
    a: 10,
    b: 20
};

var obj2 = {
    a: 10,
    b: 20
};
*/

/*
console.log(obj1 === obj2);  //=====> false

// Because Compares the Memory Reference.
*/


// 1.
//******** Compare By Matching Properties *****//
/*
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true);
}
else {
    console.log(false)
}

//=====> true
*/


// 2.
//******** Stringify to Compare *****//
/*
console.log(JSON.stringify(obj1));  //====> {"a":10,"b":20}

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log(true)
}
else {
    console.log(false)
}
*/







