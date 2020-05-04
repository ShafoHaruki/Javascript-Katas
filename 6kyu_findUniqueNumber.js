// There is an array with some numbers. All numbers are equal
// except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains 3 or more numbers.

function findUniq(arr) {
  let uniqueNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((ele) => ele == i).length == 1) {
      uniqueNumArr.push(i);
    }
  }
  return uniqueNumArr;
}
