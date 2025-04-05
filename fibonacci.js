/*
The Fibonacci sequence is a series of numbers where each number is 
the sum of the two preceding ones, usually starting with 0 and 1.

*/

function isPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    return Math.floor(sqrt) === sqrt;
}

function isFibonacci(number) {
    if (number === 0) {
        console.log(`Number ${number} Is a Fibonacci series number`);
        
    } else if (isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4)) {
        console.log(`Number ${number} Is a Fibonacci series number`);
    } else {
        console.log(`Number ${number} Not a Fibonacci series number`);
    }
}

isFibonacci(0);


//fibonacciGenerator
function fibonacciGenerator(limit) {
    let series = [0, 1];
    let nextNum = 1;
    
    while (nextNum <= limit) {
        series.push(nextNum);
        nextNum = series[series.length - 1] + series[series.length - 2];
    }
    
    return series;
}

console.log(fibonacciGenerator(5));

//with case 0 and negative numbers
function fibonacciGenerator(limit) {
    if (limit === 0) {
        return [0];
    }
    
    let series = [0, 1];
    let nextNumber = 1;
    
    if (limit < 0) {
        series = [0, 1];
        nextNumber = -1;
        
        while (nextNumber >= limit) {
            series.push(nextNumber);
            nextNumber = series[series.length - 2] - series[series.length - 1];
        }
    } else {
        while (nextNumber <= limit) {
            series.push(nextNumber);
            nextNumber = series[series.length - 1] + series[series.length - 2];
        }
    }
    
    return series;
}

const fibSeries = fibonacciGenerator(-500);
console.log(fibSeries);