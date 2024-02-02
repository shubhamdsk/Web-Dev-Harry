//for loop
console.log("Classic for loop");
const a = [22, 45, 12, 67, 43];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}

// forin loop
console.log("forin loop");
const obj = {
  1: "one",
  2: "two",
  3: "three",
};

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}

// forof loop
console.log("forof loop");

for (const value of a) {
  console.log(value);
}

/*
The map() method is a higher-order function that is used to iterate over each element of an array and apply a provided function to each element. 

It then returns a new array containing the results of applying the function to each element. The original array remains unchanged
*/

console.log("Map Function");
const number = [1, 4, 6, 10, 15, 17, 19, 23];

const SqrNum = number.map((value, index, array) => {
  let results = value ** 2;
  console.log(results);

  //   console.log(results,index,array);
});

/*
The filter() method is another higher-order function that is used to iterate over elements in an array and return a new array containing only those elements that satisfy a given condition. 

The original array remains unchanged.
*/
console.log("Filter Function");
const GreaterThanSeven = (value) => {
  if (value > 7) {
    return true;
  }
  return false;
};

console.log(number.filter(GreaterThanSeven));

/*
The reduce() method is another higher-order function that is used to iterate over the elements of an array and reduce them to a single value. 

It takes a callback function as an argument and executes that function on each element of the array, accumulating a result that is the final value.
*/
console.log("Reduce Function");

const numbers = [1, 2, 3, 4, 5];

const red = (a, b) => {
  return a + b;
  //   return a * b;
};
console.log(numbers.reduce(red));

/*
Array.from
Array.from() to convert a string into an array:
*/
const MyName = "Shubham";
console.log(Array.from(MyName));
