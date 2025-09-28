const isPallindrome = (num) => {
   const copy = num;
   let rem = 0;
   let sum = 0;

   while (num) {
      rem = num % 10;
      sum = sum * 10 + rem;
      num = Math.floor(num / 10);
   }

   return sum === copy ? 'Pallindrome' : 'Not a pallindrome';
}
const num = 221;
const result = isPallindrome(num);
console.log(result);
