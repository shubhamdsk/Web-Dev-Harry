
const addVal = () => {
   let myMap = new Map();
   for (let i = 0; i < 5; i++) {
      myMap.set(i, i + 10);
   }

   for (const key of myMap.keys()) {
      console.log(`key => ${key}`);
   }

   for (const value of myMap.values()) {
      console.log(`value => ${value}`);
   }
   myMap.forEach((value, key) => console.log(`key:${key}`, `value:${value}`))
   return myMap;
}
const result = addVal();
console.log(result);
