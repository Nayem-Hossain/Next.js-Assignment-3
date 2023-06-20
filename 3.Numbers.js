/*
  a. Write a JavaScript function that takes a positive integer as 
     input and returns true if it is a prime number, otherwise returns false.
*/

function isPrime(positiveNumber) {
    if (positiveNumber < 2) {
        return false;
    }


    for (let i = 2; i < positiveNumber/2; i++) {
        if (positiveNumber % i === 0) {
            return false
        }

    }
    return true;
}


/* b. Implement the function to check if a given positive integer is a prime number. */

console.log(isPrime(2));