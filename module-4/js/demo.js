// when it's advisable to USE function declaration RATHER than arrow function

// 1. for object methods
const obj = {
  value: 42,
  // it's better to use function decl here instead of arrow because of 'this'
  getValue: function () {
    console.log(this.value);
  },
};
obj.getValue();

//What is Method - is the function of that object
//if you are going to use it as a method DON'T USE ARROW FUNCTION

// 2. constructor function (OOP concept -> it's on the next module)
