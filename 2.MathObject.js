/* a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers.
     Use the Math object to perform the necessary calculations.
*/

function squareRoot(arrOfNum) {
    let smOfSquares = arrOfNum.reduce((total, currentNum) => total + Math.pow(currentNum, 2), 0);
    let sqroot = Math.sqrt(smOfSquares);
    return sqroot;
}


/* b. Implement the function to display the square root of the sum of squares for an array of numbers. */

console.log(squareRoot([1, 2, 3, 4]));