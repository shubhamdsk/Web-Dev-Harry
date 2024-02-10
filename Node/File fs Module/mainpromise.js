import fs from "fs/promises";

let a = await fs.readFile("dsk.txt");
console.log(a.toString());

let b = await fs.writeFile("dsk2.txt", "The data is written in the file");

let c = await fs.appendFile("dsk2.txt", "\nThis is a appended data ");
