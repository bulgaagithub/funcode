// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// var arrayStringsAreEqual = function (word1, word2) {
//   let str = "",
//     str2 = "";
//   for (let i = 0; i < word1.length; i++) {
//     str += word1[i];
//   }

//   for (let i = 0; i < word2.length; i++) {
//     str2 += word2[i];
//   }

//   return str === str2 ? true : false;
// };

var arrayStringsAreEqual = function (word1, word2) {
  let str = word1.join(""),
    str2 = word2.join("");

  return str === str2 ? true : false;
};

// Input: (word1 = ["a", "cb"]), (word2 = ["ab", "c"]);
// Output: false;

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
