// keep adding numbers to the array in above example until 0 is added to the array

let Numbers = [];

let addNumberS = () => {
  let input = prompt("Enter the Number : ");
  let number = parseFloat(input);

  if (!isNaN(number)) {
    Numbers.push(number);
    console.log("Number Added Successfully");
  } else {
    console.log("Invalid Input");
  }
};

let continueAddingN = true;
while (continueAddingN) {
  addNumberS();
  if (Numbers[Numbers.length - 1] === 0) {
    continueAddingN = false;
  }
}
// Output the array of numbers
console.log("Array of numbers:", Numbers);
