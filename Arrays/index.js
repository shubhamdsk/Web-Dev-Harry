let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);

console.log(`Length - ${arr.length}`);

// separator

console.log(arr.join(" and "));

// toString

console.log(arr.toString());

// pop

console.log(arr.pop());
console.log(arr);

// push
console.log(arr.push(12));
console.log(arr);

// shift

console.log(arr.shift());
console.log(arr);

// unshift
console.log(arr.unshift(17));
console.log(arr);

// delete

console.log(delete arr[6]);
console.log(arr);

// concat

let a = [1, 2, 4];
let b = [12, 22, 42];
let c = [31, 23, 43];

console.log(a.concat(b, c));

//sort

console.log(c.sort());

// Splice

let number = [1, 2, 3, 4, 5, 6];

console.log(`Number Array : ${number}`);

//extracted number from(given input) to end(given input)
let start = 1;
let end = 3;
console.log(
  `Splice :: start - ${start} & end - ${end} : ${number.splice(start, end)}`
);

//Remaining Elements after slice
console.log(`After Splice : ${number}`);
