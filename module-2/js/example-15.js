/* 
Example 5 - Contact logging (Function Declaration and Rest Operator)

Write a function printContactsInfo(names, phones) using Function Declaration that prints to the console the name and the user's phone number. 

The names and phones parameters will be passed strings of names and phone numbers separated by commas. 

Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones guaranteed to be the same.

Print a message to the console in the format Name:<names>; Phone:<phones>;  Age<age>

*/

// rest operator (pack)-> Used in function parameter lists; collects the remaining arguments into a single array parameter

function printContactsInfo(...rest) {
  // write code below this line
  const namesArr = rest[0].split(","); // ['Jacob', 'William', 'Solomon', 'Artemis']
  const phonesArr = rest[1].split(","); //   ['89001234567', '89001112233', '890055566377', '890055566300']
  const ageArr = rest[2].split(","); //  ['28', '21', '18', '31']

  for (let i = 0; i < namesArr.length; i++) {
    console.log(
      `Name:${namesArr[i]}; Phone:${phonesArr[i]};  Age:${ageArr[i]}`
    );
  }
}

printContactsInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300",
  "28,21,18,31"
);
