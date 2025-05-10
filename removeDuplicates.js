/**
 * Coding Question: Remove Duplicates from an Array
 * 
 * This program removes duplicate elements from a given array and returns a new array
 * containing only unique elements. It uses the `forEach` method to iterate through the
 * array and checks if an element is already present in the `uniqueArray` using the 
 * `includes` method. If not, the element is added to the `uniqueArray`.
 */

let givenArray = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15];

/**
 * Function to remove duplicates from an array.
 * 
 * @param {Array} arr - The input array from which duplicates need to be removed.
 * @returns {Array} - A new array containing only unique elements.
 */
let removeDuplicatesFromArray = function(arr) {
    let uniqueArray = [];

    arr.forEach(item => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
}

console.log(removeDuplicatesFromArray(givenArray));


let removeDuplicateUsingSet = function (arr){
    return [...new Set(arr)];
}

console.log(removeDuplicateUsingSet(givenArray));
