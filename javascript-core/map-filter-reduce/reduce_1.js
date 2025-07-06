// From an array of numbers, calculate the sum of all numbers.

const numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((num, sum = 0) => sum += num);

console.log(sum)