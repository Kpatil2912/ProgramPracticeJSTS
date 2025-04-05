/*
A factorial of a number is the product of all positive integers from 1 to that number. 
For example, factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120.
*/

//--------------------------------------------
// Iterative Approach

/**
 * Calculates the factorial of a number using an iterative approach.
 * @param {number} number - The number to calculate the factorial for.
 * @returns {number|string} - The factorial of the number or an error message for invalid input.
 */
function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const factorialOf15 = calculateFactorial(15);
console.log(`Factorial of 15 (Iterative): ${factorialOf15}`);

//--------------------------------------------
// Recursive Approach

/**
 * Calculates the factorial of a number using recursion.
 * @param {number} number - The number to calculate the factorial for.
 * @returns {number|string} - The factorial of the number or an error message for invalid input.
 */
function calculateFactorialRecursively(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * calculateFactorialRecursively(number - 1);
}

// Example usage
const inputNumber = 5; // Change this to test with different numbers
if (inputNumber < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    console.log(`Factorial of ${inputNumber} (Recursive): ${calculateFactorialRecursively(inputNumber)}`);
}