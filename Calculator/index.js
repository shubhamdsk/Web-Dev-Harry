let random = Math.random();
console.log(random);

let a = prompt("Enter First Number : ");
let b = prompt("Enter Operation : ");
let c = prompt("Enter Second Number : ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
if (random > 0.1) {
  console.log(`a = ${a} , b=  ${b} , c = ${c}`);
  console.log(`The Result of ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  console.log(`a = ${a} , b=  ${b} , c = ${c}`);
  console.log(`The Result of ${eval(`${a} ${b} ${c}`)}`);
}
