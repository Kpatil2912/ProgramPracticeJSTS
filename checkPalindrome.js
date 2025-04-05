/* 
 A palindrome is a word, phrase, number, or other sequence of characters 
 that reads the same forward and backward.
 Examples include "racecar", "madam", and "12321".
*/


//--------------------------------------------
// Reversing a string to check if it is a palindrome

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

//--------------------------------------------
// Recursive approach to check if a string is a palindrome

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Base case: if the string has 1 or no characters, it's a palindrome
    if (str.length <= 1) return true;

    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) return false;

    // Recursively check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
}
  
// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A1b2c2b1a")); // true