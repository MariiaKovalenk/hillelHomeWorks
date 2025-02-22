let answer = prompt('Enter your number'); // 375
let number1 = answer % 10; // 5
let number2 = (answer - number1) / 10 % 10; // 7
let number3 = (answer - number1 - (number2 * 10)) / 100; // 3

console.log(`Each number are equal to another one? Answer: ${number1 === number2 && number3 === number1}`);
console.log(`Some number are equal? Answer: ${number1 ===  number2 || number1 === number3 || number2 ===  number3}`);