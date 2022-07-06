

var date = new Date();
console.log(date);

var today = date.getDay();
console.log(today); //=====> 3


/*-------------- *\
  Switch Structure
\*-----------------*/


/*
switch (dependency) {

    case 1:
        console.log('Something');
        break;
    case 2:
        console.log('Something else');
        break;
    default: console.log('If nothing matches to dependency then Default behavior')
}
*/


/*-------------- *\
  Today Problem
\*-----------------*/

var today = date.getDay();

// Logic of operation: 0 = sunday, 1 = monday, 2 = tuesday.......

switch (today) {

    case 0:
        console.log('Today is Sunday');
        break;

    case 1:
        console.log('Today is Monday');
        break;

    case 2:
        console.log('Today is Tuesday');
        break;

    case 3:
        console.log('Today is Wednesday');
        break;

    case 4:
        console.log('Today is Thursday');
        break;

    case 5:
        console.log('Today is Friday');
        break;

    case 6:
        console.log('Today is Saturday');
        break;

    default: console.log('Not a Valid Number')

}

switch (8) {

    case 0:
        console.log('Today is Sunday');
        break;

    case 1:
        console.log('Today is Monday');
        break;

    case 2:
        console.log('Today is Tuesday');
        break;

    case 3:
        console.log('Today is Wednesday');
        break;

    case 4:
        console.log('Today is Thursday');
        break;

    case 5:
        console.log('Today is Friday');
        break;

    case 6:
        console.log('Today is Saturday');
        break;

    default: console.log('Not a Valid Number')

}

