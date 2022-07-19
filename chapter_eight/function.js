
/*--------------- *\
  Function in JS
\*-----------------*/


//******** Stages *****//

// 1. INPUT(By user)
// 2. PROCESSING (BY FUNCTION)
// 2. OUTPUT(For user)


//******** Defining Function *****//

function name_of_this_function() {
    // Blocks of Code To complete the task
}

function myName() {
    console.log('Abul Bashar');
}

function add() {
    var a = 25;
    var b = 50;
    console.log(a + b);
}



function sub() {
    var a = 25;
    var b = 50;
    console.log(a - b);
}


//******** Invoke Function *****//

myName(); //=====> Abul Bashar

// In case we need to see this 10 times repeatedly

for (var i = 0; i < 10; i++) {
    myName();
}
/*====>
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
Abul Bashar
*/

add  //=====>
add(); //=====> 75

sub //=====>
sub(); //=====> -25

console.log(add()) //=====> undefined




