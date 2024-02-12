// Create an array of numbers and take innput from the user to add numbers to this array

let numbers = [];
let addNumber = () => {
  let input = prompt("Enter the Number : ");
  let number = parseFloat(input);

  if (!isNaN(number)) {
    numbers.push(number);
    console.log("Number Added Successfully");
  } else {
    console.log("Invalid Input");
  }
};

let continueAdding = true;
while (continueAdding) {
  addNumber();
  let response = prompt("Do you want to add another number(yes/no)");
  if (response.toLowerCase() !== "y") {
    continueAdding = false;
  }
}

// Output the array of numbers
console.log("Array of numbers:", numbers);
