/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
Happy coding!
*/

function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const twoLengthFace = arr[i].length == 2;
    const threeLengthFace = arr[i].length == 3;
    const ele1 = arr[i][0];
    const ele2 = arr[i][1];
    const ele3 = arr[i][2];
    if (
      threeLengthFace &&
      (ele1 === ":" || ele1 === ";") &&
      (ele2 === "-" || ele2 === "~") &&
      (ele3 === ")" || ele3 === "D")
    )
      count++;
    if (
      twoLengthFace &&
      (ele1 === ":" || ele1 === ";") &&
      (ele2 === ")" || ele2 === "D")
    )
      count++;
  }
  return count;
}

// //It cannot work after refactoring
// function countSmileys(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const noNoseFace = arr[i].length == 2;
//     const withNoseFace = arr[i].length == 3;
//     const eyePart = (arr[i][0] == ":" || arr[i][0] == ";");
//     const nosePart = (arr[i][1] == "-" || arr[i][1] == "~");
//     const mouthPart = (arr[i][2] == ")" || arr[i][2] == "D");
//     if (noNoseFace && eyePart && mouthPart
//     ) count++;
//     if (withNoseFace && eyePart && nosePart && mouthPart
//     ) count++;
//   }
//   return count;
// }

countSmileys([";D", ":-(", ":-)", ";~)"]); //outputs 3
