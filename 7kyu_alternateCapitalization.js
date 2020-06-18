// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

function capitalize(string) {
  return [
    string
      .split("")
      .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
      .join(""),
    string
      .split("")
      .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
      .join(""),
  ];
}

const alternateCapitalization = (word) => {
  let firstArr = [];
  let secondArr = [];
  word
    .split("")
    .map((letter, index) =>
      index % 2 === 0
        ? firstArr.push(letter) && secondArr.push(letter.toUpperCase())
        : secondArr.push(letter) && firstArr.push(letter.toUpperCase())
    );
  return [firstArr.join(""), secondArr.join("")];
};
