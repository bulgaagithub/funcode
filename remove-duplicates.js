var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let c = 1 + i;
    if (nums[i] === nums[c]) {
      nums.splice(c, 1);
      --i;
    }
  }
  return nums.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
