/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let charMap = new Map();
    let wordMap = new Map();

    let n = pattern.length, i = 0;
    let words = s.split(" ");

    if (n !== words.length) return false;

    while (i < n) {
        let c = pattern.charAt(i);
        let word = words[i];
        if (charMap.has(c) !== wordMap.has(word)) return false;
        if (charMap.has(c)) {
            if ( (wordMap.get(word) !== c) || (charMap.get(c) !== word)) return false;
        } else {
            charMap.set(c, word);
            wordMap.set(word, c);
        }
        i++;
    }

    return i === n;
};

wordPattern("abba", "dog dog dog dog");
// console.log(wordPattern("abba", "dog cat cat fish"));
