/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (A, B) {
    const indexesOfB = B.map((e, i) => i).sort((i1, i2) => B[i1] - B[i2]);
    const sortedA = A.sort((a, b) => a - b);
    const res = Array(A.length);

    let j = 0;

    let notUsed = [];

    // 2 7 11 15 
    // 1 4 10 11
    for (let i of indexesOfB) {
        while(j < A.length && sortedA[j] <= B[i]) {
            notUsed.push(sortedA[j]);
            j++;
            console.log(j);
        }

        if(j === A.length) {
            res[i] = notUsed.pop();
        } else {
            res[i] = sortedA[j];
            j++;
        }
    }

    console.log(indexesOfB);
    return res;
    console.log(indexesOfB);
    
    // console.log(sortedA);

    console.log(notUsed);
};

console.log(advantageCount([2,7,11,15], [1,10,4,11]));
