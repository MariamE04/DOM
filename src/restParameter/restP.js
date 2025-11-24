// Task 1: Sum of Numbers
function sumAll(...numbers) {
  let sum = 0;
  for(const number of numbers){
    sum += number;
  }
  return sum;
}

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100


// Task 2: Concatenate Strings
function concatStrings(first, ...others) {
  return first + " " + others.join(" ");
}

console.log(concatStrings("Hello", "World!")); // Output: "Hello World!"
console.log(concatStrings("I", "love", "JavaScript")); // Output: "I love JavaScript"

// Task 3: Destructure with Rest
function separateFirstTwo(array) {
  const [a, b, ...remaining] = array;
  return {
    firstTwo: [a, b],
    remaining: remaining
  };
}

console.log(separateFirstTwo([1, 2, 3, 4, 5]));
// Output: { firstTwo: [1, 2], remaining: [3, 4, 5] }


//Task 4: Group People by Age
function groupByAge(minAge, ...people) {
    const older = [];
    const younger = [];

    for(const person of people){
        if(person.age >= minAge){
            older.push(person)
        } else {
            younger.push(person);
        }
    }

    return {
        older: older,
        younger: younger
    };

}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 18 }
];

console.log(groupByAge(21, ...people));
// Output: { older: [{name: "Alice", age: 25}, {name: "Charlie", age: 35}], younger: [{name: "Bob", age: 20}, {name: "David", age: 18}] }