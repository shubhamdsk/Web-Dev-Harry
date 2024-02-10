import { log } from "console";
import path from "path";

let myPath = "D:\\JS\\Web-Dev-Harry\\Node\\File fs Module\\dsk2.txt";

// Extension of file
console.log(path.extname(myPath));

// Directory name
console.log(path.dirname(myPath));

// Basename eof file
console.log(path.basename(myPath));

// join path
console.log(
  path.join("D:\\JS\\Web-Dev-Harry\\Node\\"),
  "File fs Module\\dsk.txt"
);
