/* 
Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?". 
If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"

const answer = prompt('What is the official name of JavaScript?');
const rightAnswer = 'ECMAScript';
// Write if else code below this line
*/

// const answer = prompt("What is the official name of JavaScript?");
// const rightAnswer = "ECMAScript";
// // Write if else code below this line

// if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
//   console.log("Correct!");
// } else {
//   //   console.log("Do not know? ECMAScript!");
//   alert("Do not know? ECMAScript!");
// }

// const answer = prompt("Panget ba si KC?");
// const rightAnswer = "Yes";

// if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
//   alert("TAMA!");
// } else {
//   alert("Bahala Ka Jarn!");
// }
//  --- FROM LMS ---
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"
