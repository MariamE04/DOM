// 3.1 Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const merge = [...array1, ...array2];
console.log(merge);

// 3.2 Copying Array
const originalArray = ['apple', 'banana', 'cherry'];
const copiedArray = [...originalArray, 'date'];

console.log("originalArray:", originalArray);
console.log("copiedArray:", copiedArray);

// 3.3 Adding Elements to the Beginning of an Array
const numbers = [20, 30, 40];
const copiedNumbers = [10, ...numbers];
console.log(copiedNumbers);

// 3.4 Merging Objects
const userDetails = { name: 'Alice', age: 25 };
const contactInfo = { email: 'alice@example.com', phone: '123-456-7890' };
const userProfile = {...userDetails, ...contactInfo};
console.log(userProfile);

// 3.5 Copying and Modifying an Object
const book = { title: '1984', author: 'George Orwell', year: 1949 };
const updatedBook = {...book, year: 1950};

console.log("book:", book);
console.log("updatedBook:", updatedBook);

// 3.6 Using Spread with Function Arguments
const numbers1 = [5, 10, 15];

function sum(...numbers) {
  let total = 0;

  for (let n of numbers) {
    total += n;
  }

  return total;
}

console.log(sum(...numbers1));

// 3.7 Combining Arrays with New Elements
const colors1 = ['red', 'blue'];
const colors2 = ['green', 'yellow'];
const allColors = [...colors1, ...colors2, 'purple'];
console.log(allColors);

// 3.8 Rest Operator in Function Parameters
function describePerson(name, ...hobbies) {
    console.log(`Name: ${name}, Hobbies: ${hobbies.join(', ')}`);
}

describePerson('Charlie', 'reading', 'coding', 'hiking');


// 3.9 Destructuring with Rest Operator
const numbers2 = [10, 20, 30, 40, 50];

const [firstNum, ...otherNums] = numbers2;

console.log("firstNum:", firstNum);
console.log("otherNums:", otherNums);

