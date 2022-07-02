var date = new Date();
console.log(date);
//=====> 2022-07-02T05:24:39.610Z



console.log(date.toDateString());
//====>Sat Jul 02 2022

console.log(date.toTimeString());
//====> 11:29:43 GMT+0600 (Bangladesh Standard Time)

console.log(date.toLocaleDateString());
//====> 7/2/2022



console.log(date.getFullYear()); //====> 2022
console.log(date.getMonth()); //====> 6
console.log(date.getDate()); //=====> 2
console.log(date.getHours()); //====> 11
console.log(date.getMinutes()); //====> 34
console.log(date.getSeconds()); //======> 20

