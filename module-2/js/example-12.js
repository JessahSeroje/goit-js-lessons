/* 
Example 2 - Smaller of numbers (Function Expression)
Write a function min(a,b) using Function Expression that returns the smaller of the numbers a and b.

*/

const min = function (a, b) {
  // write code below this line

  // 1st approach method ⤵️
  /*   if (a < b) {
    return a;
  } else {
    return b;
  } */

  // 2nd approach method - TERNARY OPERATOR⤵️ this one is es6, the modern js way
  /*   return a < b ? a : b; */

  // 3rd approach method - TERNARY OPERATOR ⤵️
  return Math.min(a, b);
};

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

// TERNARY OPERATOR - is a one line operator
