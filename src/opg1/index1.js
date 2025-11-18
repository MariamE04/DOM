// 1.1
var arrayNames = ["lars", "Jan", "Peter", "Bo", "Frederik"];

function isShortName(name) {
    return name.length <= 3;
}

var shortNames = arrayNames.filter(isShortName);

console.log("Original array:");
arrayNames.forEach(name => console.log(name));

console.log("Short names:");
shortNames.forEach(name => console.log(name));


// 1.2
function upperCase(name) {
    return name.toUpperCase();
}

let uppercasedNames = arrayNames.map(upperCase);

console.log("Uppercased names:");
uppercasedNames.forEach(name => console.log(name));


// 1.3
function createListHTML(names){
    let listItems = names.map(name => `<li>${name}</li>`).join("");
    return `<ul>${listItems}</ul>`;
}

var namesArray = ["Lars", "Peter", "Jan", "Ian"];
var htmlString = createListHTML(namesArray);
console.log(htmlString);

// 1.4
// 1.4.1
let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function filterCars(car) {
    return car.year > 1999;
}

function filterCars1(car) {
    return car.make === "Volvo";
}

function filterCars2(car) {
    return car.price < 5000;
}

var carByYear = cars.filter(filterCars);
var carByYear1 = cars.filter(filterCars1);
var carByYear2 = cars.filter(filterCars2);

console.log("Cars newer than 1999:");
carByYear.forEach(car => console.log(car));

console.log("Cars named Volvo:");
carByYear1.forEach(car => console.log(car));

console.log("All cars with a price below 5000:");
carByYear2.forEach(car => console.log(car));

// 1.4.2
function createSQLInsertStatements(carsArray){
    return carsArray
    .map(car => `INSERT INTO cars (id,year,make,model,price) VALUES (${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price});`)
    .join('\n');
}

let sqlStatements = createSQLInsertStatements(cars);
console.log(sqlStatements);


