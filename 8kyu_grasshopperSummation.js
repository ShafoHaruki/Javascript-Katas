/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

function summationVer1(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

function summationVer2(num) {
  return Array(num)
    .fill(1)
    .map((item, index) => index + 1)
    .reduce((a, b) => a + b, 0);
}
