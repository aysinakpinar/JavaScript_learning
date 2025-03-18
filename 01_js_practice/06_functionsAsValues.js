
// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
    return 123;
  }
  // This is a function with one parameter, but still no name
  // And using briefer syntax that might help when we get to .map and .filter
const doubleNumber = (n) => 2*n
let newSalary = doubleNumber(1000000)
console.log(newSalary);
  
  