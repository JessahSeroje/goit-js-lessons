/* 
Example 11 - The for loop

Write a for loop that prints numbers in ascending order to the browser console from min to max, but only if the number is a multiple of 5.

const max = 100;
const min = 20;
// Write for loop code here
*/

const max = 100;
const min = 20;
// Write for loop code here

// for(initialization;condition;post/iteration){}

for (let i = 0; i <= 1000; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// (let i = 0; - meaning for initialization and the number will starts at 0
// i <= 1000; - counting will ends  to 1000
//  i += 1  -  how will do the counting
//  ;  -  for separation of the conditions
//  (i % 5 === 0)  -  the basic formula to perform multiples of numbers
