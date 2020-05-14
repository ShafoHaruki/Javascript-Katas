/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
Past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

function past(h, m, s) {
  const minutes = h * 60 + m;
  const seconds = minutes * 60 + s;
  return seconds * 1000;
}
