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

/*
splice() Method:

splice is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

It takes multiple parameters, including the starting index, the number of elements to remove, and optional elements to add.

The original array is modified.
*/

let number = [1, 2, 3, 4, 5, 6];

console.log(`Number Array : ${number}`);

//extracted number from(given input) to end(given input)
let start = 1;
let end = 3;
console.log(
  `Splice :: start - ${start} & end - ${end} : ${number.splice(start, end)}`
);

//Remaining Elements after splice
console.log(`After Splice : ${number}`);

/*
slice() Method:

slice is used to create a new array by extracting a portion of an existing array.

It takes two parameters: the starting index (inclusive) and the ending index (exclusive).

The original array remains unchanged.
*/
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);
console.log(slicedArray);
console.log(originalArray);

// reverse
const array = [3, 4, 5, 7, 8, 2, 9];
console.log(`Original Array - ${array}`);
console.log(`Reversed Array - ${array.reverse()}`);
