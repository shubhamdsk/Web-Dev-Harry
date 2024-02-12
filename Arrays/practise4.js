
// Create an array of square of given numbers

let array = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

let Sqr = (array) => {
  let squareArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let Sqrt = element ** 2;
    squareArray.push(Sqrt);
  }
  for (let index = 0; index < array.length; index++) {
    console.log(array[index], "-", squareArray[index]);
  }
};
Sqr(array);
