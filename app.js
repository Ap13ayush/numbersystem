// writing the code for all prime number;

const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];

let primeArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    primeArray.push(numbers[i]);
    console.log("prime" + numbers[i]);
  } else {
    console.log("not prime" + numbers[i]);
  }
}   

// Create a new array called primeArray that stores all the prime numbers found.
 console.log(primeArray);    
// Find the maximum and minimum number in the primeArray.
console.log(Math.max(...primeArray));

console.log(Math.min(...primeArray));
// Calculate the sum of all numbers in the primeArray.

console.log(primeArray.reduce((acc, curr) => acc + curr, 0));

