/*
The Fibonacci sequence is a series of numbers where each number is 
the sum of the two preceding ones, usually starting with 0 and 1.

*/

/* Genrate a fibonacci series upto n */

let n =10 ;
let generateFibonacciUptoN = function (n){
    fib = [0,1];
    for (let i = 2 ; i < n ; ++i ){
        fib[i] = fib[i-1] + fib[i-1];
    }
    return fib.slice(0 ,n );
}
console.log(generateFibonacciUptoN(n))

//fib until nth
let n =8 ;
let fibuntil = function (){
    let fib = [0,1];
    for(let i=2 ; i < n ; i++){
        fib[i] = fib[i-1] + fib[i-2];
        
    }return fib.slice(0 , n );
}
console.log(fibuntil(n))
// fib of nth

function nthFib(n){
    if(n===0) return 0;
    if(n===1) return 1;
    let prev = 0;
    let curr =1;
    let next ;
    for(let i =2 ; i <=n ; i++){
        next = prev + curr ;
        prev = curr ;
        curr = next ;
        
        
    }return curr ;
}
console.log(nthFib(n-1))


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

// isFibonacci(0);


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

// console.log(fibonacciGenerator(5));

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

// const fibSeries = fibonacciGenerator(-500);
// console.log(fibSeries);