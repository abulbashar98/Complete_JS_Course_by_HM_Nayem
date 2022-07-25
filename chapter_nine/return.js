
// Higher Order function part 2

//******** Return a Function From another function *****//


function greetings(greet) {

    function name(name) {
        return greet + ' ,' + name + '!'
    }

    return name;
}

var greetAb = greetings('Good Morning')

// Note: Notice that variable greetAb is now a function

console.log(typeof (greetAb)); //====> function

// Notice that, it also holds the argument greet inside as closer.
// greeting function is now closed and return was stored in a variable.
// but we can still use the argument greetings() got. That is the use of
// closer

// Example: 

console.log(greetAb('Abul Bashar')); //=====> Good Morning ,Abul Bashar!


var greetNh = greetings("Good Evening");
console.log(greetNh('Naim Heera'));//=====> Good Evening ,Naim Heera!




//***  One more Example of return function and use of closure


function toThePower(p) {



    return function (b) {

        var result = 1;
        for (var i = 0; i < p; i++) {

            result *= b;
        }
        return result;
    }


}

var cubed = toThePower(3);
console.log(cubed(2)); //=======> 8

var toThePower5 = toThePower(5);
console.log(toThePower5(2)); //=====> 32


var poweredBy10 = toThePower(10);
console.log(poweredBy10(2)); //=======> 1024

var poweredBy11 = toThePower(11);
console.log(poweredBy11(11)); //=====> 285311670611




