var lengthOfLastWord = function (s) {
  let words = s.split(/\s+/).filter((w) => w != "");
  if (words.length === 0) return 0;
  return words[words.length - 1].length;
};

// var lengthOfLastWord2 = function (s) {
//   let length = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " " && length != 0) {
//       return length;
//     } else if (s[i] !== " ") {
//       length++;
//     }
//   }
//   return length;
// };

console.log(lengthOfLastWord("Hi "));
