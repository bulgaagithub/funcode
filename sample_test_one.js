
var sampleTestFirst = function(arr) {
    if (arr === null || arr.length % 2 === 0) return 0;
    let midleIndex = Math.floor(arr.length / 2);
    let midleItem = arr[midleIndex];
    for (let i = 0; i < arr.length; i++) {
        if(i !== midleIndex && midleItem >= arr[i]) {
            return 0;
        }
    }
    return 1;
};


console.log(sampleTestFirst([10]));
