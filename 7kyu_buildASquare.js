// I will give you an integer. Give me back a shape that is as long and wide
// as the integer. The integer will be a whole number between 0 and 50.

// Example: Integer = 3; I expect a 3x3 square back just like below as a string.

// Solution:

// +++
// +++
// +++

function generateShape(int) {
  let arr = [];
  for (let i = 0; i < int; i++) {
    arr.push("+".repeat(int));
  }
  return arr.join("\n");
}
