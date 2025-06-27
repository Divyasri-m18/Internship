const fruits=["Apple","Banana","Cherry","Orange","Jackfruit"];
console.log(fruits[2]);
fruits.push("Mango");
fruits.shift();
console.log(fruits.length);
fruits.forEach(fru=>console.log(fru));

const numbers=[1,2,3,4,5];
numbers.reverse();
console.log(numbers);
let sum=0;
numbers.forEach(num=>sum+=num);
console.log(sum);