// Coding Question: Find the Last Non-Repeating Character in a String

/**
 * Function to find the last non-repeating character in a given string.
 * If no such character exists, return '$'.
 * 
 * @param {string} str - The input string
 * @returns {string} - The last non-repeating character or '$' if none exists
 */
function lastNonRepeatingChar(str) {
    let charCount = {}; // Object to store the count of each character
  
    // Step 1: Count the occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1; // Increment count or initialize to 1
    }
  
    // Step 2: Traverse the string from the end to find the last non-repeating character
    for (let i = str.length - 1; i >= 0; i--) {
        if (charCount[str[i]] === 1) { // Check if the character appears only once
            return str[i]; // Return the last non-repeating character
        }
    }
  
    // Step 3: If no non-repeating character is found, return '$'
    return '$';
}
  
// Example usage:
console.log(lastNonRepeatingChar("ababcde")); // Output: "e" (last non-repeating character)
console.log(lastNonRepeatingChar("aabbcc"));  // Output: "$" (no non-repeating character)