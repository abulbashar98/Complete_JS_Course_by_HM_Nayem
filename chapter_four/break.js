
/*------------------------------------------------ *\
  Break StateMent to Escape from an Infinity Loop
\*---------------------------------------------------*/


while (true) {

    var randomNumber = Math.ceil(Math.random() * 10)

    if (randomNumber === 7) {
        console.log('You are in Heaven, got ' + (randomNumber))
        break;
    }

    else {
        console.log('Hell, you got ' + (randomNumber))
    }

}

for (var i = 0; i < 10; i++) {
    if (i * 5 > 25) {
        break;
    }
    else {
        console.log(i)
    }
}


