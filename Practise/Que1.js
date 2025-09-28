const arr = [1, 2, 'shubham', 3, 4, 5, undefined, '3'];

const add = (arr) => {
   let sum = 0;
   let mul = 1;
   for (const ele of arr) {
      if (typeof ele !== 'number') continue;

      if (ele % 2 === 0) {
         sum += ele;
      } else {
         mul *= ele;
      }
   }
   return { sum, mul };
};

const result = add(arr);
console.log(result);  // { sum: 6, mul: 15 }
