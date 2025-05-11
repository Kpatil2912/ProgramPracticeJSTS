/**
 * Question: Write a function to flatten a deeply nested array into a single-level array.
 */

function flattenNestedArray(arr) {
    return arr.flat(Infinity);
}

const nestedArray = [1, [2, [3, 4]]];
console.log(flattenNestedArray(nestedArray));