/* 
Example 2 - Combined operators

Replace the override expression with the combined operator +=.

let students = 100;
students = students + 50;
console.log(students);
*/

let students = 150;
// students = students + 50;
students += 50;
console.log(students);

// let username = "Mango";
// username = "Poly";
// console.log(username);

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem += 1500;

// console.log(productName);
// console.log(pricePerItem);

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);
