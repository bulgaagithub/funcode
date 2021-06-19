var threeSum = function (array) {
  array.sort((a, b) => a - b);
  //   console.log(array);
  const triplets = [];
  //   console.log(array.length); // 6
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1; // 1 2 4
      console.log("left: ", left);
      let right = array.length - 1; // always 5
      console.log("right: ", right);

      while (left < right) {
        const currentSum = array[i] + array[left] + array[right];
        // -4 + -1 +
        console.log(
          `${array[i]} + ${array[left]} + ${array[right]} = `,
          currentSum
        );
        if (currentSum === 0) {
          triplets.push([array[i], array[left], array[right]]);
          console.log("triplets: ", triplets);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

console.log("--------------: ", -123 * -1);
threeSum([-1, 0, 1, 2, -1, -4]);
