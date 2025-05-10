function reverseWords(str) {
    return str.split(' ')
              .map(word => word.split('').reverse().join(''))
              .join(' ');
  }
  
  // Example:
  console.log(reverseWords("Hello World")); // Output: "olleH dlroW"
  