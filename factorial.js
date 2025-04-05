/*
A factorial of a number is the product of all positive integers from 1 to that number. 
For example, factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120.
*/


function calculateFactorial(number) {
    if (number < 0) {
        return "Please enter a positive number";
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

const factorialOf15 = calculateFactorial(15);
//console.log(factorialOf15);


// using recursive 

function calculateFactorialRecursively(number){
    if(number <0) return "Please enter a positive number";
    if(number === 0 || number === 1) return 1;
    return number * calculateFactorialRecursively(number-1);
}
console.log(calculateFactorialRecursively(-1)); 