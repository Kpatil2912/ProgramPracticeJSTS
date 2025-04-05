/* 
 A palindrome is a word, phrase, number, or other sequence of characters 
 that reads the same forward and backward.
 Examples include "racecar", "madam", and "12321".
*/

function isPalindrome(str){
    str = str.toLowerCase();

    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('1-racecar-1')); 

//--------------------------------------------
// two pointer approach 

function isPalindromeTwoPointer(str) {
    // Clean the string
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Use two pointers
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromeTwoPointer('1-racecar-1')); 