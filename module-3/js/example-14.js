/* 
Example 4 - Deep destructuring

Rewrite the property so that it uses one object's parameter instead of a set of independent arguments.
*/

// write code below this line
function getBotReport({ companyName, bots: { repair, defence } }) {
  return `${companyName} has ${repair + defence} bots in stock`;
  // write code above this line
}

// It was
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Is expected
console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
