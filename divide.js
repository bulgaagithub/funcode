/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    if(divisor === 0) {
        return false;
    }

    let res = Math.floor(Math.abs(dividend / divisor));
    res = dividend < 0 && divisor < 0 ? res : dividend < 0 || divisor < 0 ? -res : res;

    if(res > Math.pow(2,31) - 1) res = Math.pow(2,31) - 1;
    return res;
};


console.log(Math.pow(-2,31));
console.log(Math.pow(2,31) - 1);
console.log(divide(7,-3));
// console.log(divide(-2147483648, -1));
// console.log(divide(-1,-1));
// console.log(divide(1,2));
// console.log(divide(5,2));
// console.log(divide(10,3));
// console.log(divide(0,1));
