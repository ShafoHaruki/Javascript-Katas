// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:

// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

//============ SOLUTIONS BELOW =================

const searchInMultiDimensionalArray = (array, args) => {
  const splittedArray = array.join("").split("");
  return splittedArray.includes(args);
};

searchInMultiDimensionalArray(["a", "f", ["c", "h", ["j"]]], "j");
//true
searchInMultiDimensionalArray(["a", "f", ["c", "h", ["j"]]], "x");
//false
