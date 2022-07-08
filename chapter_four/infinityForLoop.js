

/*-------------- *\
  Infinity For Loop
\*-----------------*/

for (; ;) {
  var random = Math.ceil(Math.random() * 10)
  if (random === 7) {
    console.log("you are in Heaven, you got " + (random))
    break;
  }
  else {
    console.log("Hell, You got " + (random));
  }
}