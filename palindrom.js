var isPalindrome = function (x) {
  let temp = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed === temp ? true : false;
};

var isPalindrome2 = function (x) {
  const arr1 = Array.from(x.toString(), Number);
  const arr2 = Array.from(x.toString(), Number).reverse();

  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false;
  }
  return true;
};
console.log(isPalindrome2(123));
console.log(isPalindrome2(121));
