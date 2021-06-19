
var sampleTestSecond = function(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] % 2 == 0) 
            sumEven += arr[i];
        else 
            sumOdd += arr[i];
    }

    return sumOdd - sumEven;
};


console.log(sampleTestSecond([1,2]));
