/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let res = 0; 
//     for (let a = 0 ; a < s.length; a++) {
//         let visited = [];
//         for (let b = a; b < s.length; b++) {
//             if (visited[s[b]] == true) {
//                 break;
//             } else {
//                 res = Math.max(res, b - a + 1);
//                 visited[s[b]] = true;
//             }
//         }
//         visited[s[a]] = false;
//     }
//     return res;
// };

// improve and while loop

var lengthOfLongestSubstring = function(s) {
    let res = 0; 
    let start = 0; 
    let end = 0;
    const uniqueCharacters = new Set();
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            res = Math.max(res, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return res;
};


console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
