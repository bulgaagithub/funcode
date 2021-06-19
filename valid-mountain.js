/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let N = arr.length;
    let i = 0;

    // walk up
    while (i+1 < N  && arr[i] < arr[i+1]) {
        i++;
    }
    
    // peak can't be first or last 
    if (i === 0 || i === N -1) return false;

    // walk down 
    while (i+1 < N  && arr[i] > arr[i+1]) {
        i++;
    }

    return i === N - 1;
};

console.log(validMountainArray([0,2,3,4,5,2,1,0]));
console.log(validMountainArray([2,1]));
console.log(validMountainArray([3,5,5]));
console.log(validMountainArray([0, 3, 2, 1]));
