/**
 * Question: Calculate the sum of consecutive subarrays of a given size.
 * 
 * Explanation:
 * Given an array and a number `occ`, the task is to calculate the sum of all 
 * consecutive subarrays of size `occ` and return the results in an array.
 * For example, for the array [1, 3, 1, 2, 3, 2, 4, 3, 5] and `occ = 4`, 
 * the function will calculate the sum of [1, 3, 1, 2], [3, 1, 2, 3], and so on.
 */

const givenArr = [1, 3, 1, 2, 3, 2, 4, 3, 5];
let givenOcc = 4;

function sumofOccurance(arr, occ) {
    let res = [];
    for (let i = 0; i <= arr.length - occ; i++) {    
        let sum = 0;
        for (let j = i; j < i + occ; j++) {
            sum += arr[j];
        }
        res.push(sum);
    }
    return res;
}

console.log(sumofOccurance(givenArr, givenOcc));