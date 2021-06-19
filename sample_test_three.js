
var sampleTestThird = function(arr, start, length) {
    if (start < 0 || length < 0 || start + length - 1 >= arr.length) return 0;

    let temp = [];
    for (let i = start; i <= length; i++) {
        temp.push(arr[i]);
    }
    return temp;
};


console.log(sampleTestThird(['a','b','c'],1, 1));
