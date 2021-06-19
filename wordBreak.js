/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/**
 * Approach 1 Brute Force
 */
var wordBreak = function (s, wordDict) {
  let wordDictSet = new Set();
  wordDict.map((word) => wordDictSet.add(word));
  let queue = [0];
  let visited = new Map();
  while (queue.length > 0) {
    let start = queue.pop();
    if (visited.has(start)) {
      continue;
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (wordDictSet.has(s.substring(start, end))) {
        queue.unshift(end);
        if (end === s.length) {
          return true;
        }
      }
    }
    visited.set(start, true);
  }
  return false;
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
