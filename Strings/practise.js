// 1. what will the following print in js ? - log(' har\'.length)

console.log("dsk'".length); // 4

// Explore the includes , startsWith & endsWith function of a string

let Lname = "deshmukh";
console.log(Lname.includes("d")); //true

console.log(Lname.startsWith("d")); //true
console.log(Lname.startsWith("sd")); //false

console.log(Lname.endsWith("d")); //false
console.log(Lname.endsWith("h")); //true

//write aa program to convert a given string to lowercase

let Str = "I'm Learning JavaScript";
console.log(Str.toLowerCase()); //i'm learning javascript

//Extract the amount out of this string - 'please give me Rs.1000'
let string = "please give me Rs.1000";
console.log(string.slice(18));

const amount = parseInt(string.match(/\d+/)[0]);
console.log(amount);

//Try to change 4th character of a given string were you able to do it.

let str = "Shubham";

let strArray = str.split("");
strArray[3] = "x";
str = strArray.join("");
console.log(str); // Output: "Shuxham"
