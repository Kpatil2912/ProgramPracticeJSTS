// Using Built-in Methods
let stringForBuiltInMethod = "kiran";
function reverseStringUsingBuiltInMethod(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStringUsingBuiltInMethod(stringForBuiltInMethod));

//Using Spread Operator
function reverseString(str) {
    return [...str].reverse().join('');
}

//Using Array Reduce
function reverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// Using a For Loop
let stringForLoop = "reversethisstringforloop";

function reverseStringUsingForLoop(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseStringUsingForLoop(stringForLoop));

//Using Recursion
let stringforRecursion = "reverseStringUsingRecursion";

function reverseStringUsingRecursion(str) {
    if (str === '') {
        return '';
    } else {
        return reverseStringUsingRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringusingrecursion(stringforRecursion));

// better recursive
function reverseString(str) {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}



