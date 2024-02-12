// filter the number divisible by 10 in given array

let array = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

let number10 = array.filter((elements) => {
  return elements % 10 === 0;
});
console.log(number10);
