const { log } = require("console");
const fs = require("fs");

console.log("Starting");
//writeFileSync - It will block the execution of program until the operation is not performed.
// fs.writeFileSync("dsk.txt", "I'm learning web dev");

// writeFile - it will not block the flow of code
fs.writeFile("dsk2.txt", "I'm learning node js", () => {
  console.log("done");
});
console.log("Ending");

fs.appendFile("dsk.txt", "\nMy name is shubham deshmukh", (e) => {
  if (e) {
    console.log("Error:", e);
  } else {
    console.log("Data appended successfully.");
  }
});
