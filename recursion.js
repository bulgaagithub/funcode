/**
 * Recursion 
 * Property
 * 1. Call Itself
 * 2. Base case
 */
function recursion(number) {
    if(number === 1) return 1;

    return number * recursion(number - 1);
}

// Try draw recursion tree

console.log(recursion(5));

function fact(number) {
    let total = 1;
    for(let i = 2; i <= number; i++) {
        total *= i;
    }
    return total;
}

console.log("!: ", fact(5));
/**
 * When use
 * Tree structure data [json, dom]
 * Backtracking algorithm
 * Бусад тохиолдолд ашиглах нь тохиромжгүй байж мэднэ.
 */

// function fib(n) {
//     if(n < 1) return 0;
//     if(n === 1 || n === 2) return 1;
//     return fib(n - 1) + fib(n -2);
// }

// Use memoization
let fibCache = {};

// function fib(n) {
//     if(fibCache[n] !== undefined) return fibCache[n];
//     if(n <= 2) return 1;
//     fibCache[n] = fib(n - 1) + fib(n -2);
//     return fibCache[n];
// }

// Use Loop
function fib(n) {
    let prevprevNumber, prevNumber = 0, currentNumber = 1;
    for(let i = 1; i < n; i++) {
        prevprevNumber = prevNumber;
        prevNumber = currentNumber;
        currentNumber = prevprevNumber + prevNumber;
    }

    return currentNumber;
}


console.log(fib(4));
