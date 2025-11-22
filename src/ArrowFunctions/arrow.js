// JS Arrow Functions

// 1.1
const greet = () => "Hello, World!";
console.log(greet());

// 1.2
const add = (a, b) => a + b;
console.log(add(5,3));

// 1.3
const multiply = (a, b) => a * b;
console.log(multiply(4,2));

// 1.4
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// 1.5
const square = (x) => x * x;
console.log(square(5));

// 1.6
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(numbers => numbers * 2);
console.log(doubledNumbers);

// 1.7
const numbers1 = [5, 12, 18, 7, 24];
const foundNumbers = numbers1.filter(n => n > 10);
console.log(foundNumbers);

// 1.8 
setTimeout(() => console.log("Hello after 1 second"), 1000);

// 1.9 
const person = {
  name: 'Alice',
  sayHello: () => console.log("Hello, my name is" + person.name)
};
person.sayHello();

// 1.10
const greets = (names, greeting = "Hello") => `${greeting}, ${names}!`;
console.log(greets('Alice'));
console.log(greets('Bob', 'Hi'));