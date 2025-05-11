// /To check if two strings are anagrams in JavaScript, you can follow this simple approach:

let str1 = "listen";
let str2 = "silent";
function isAnagram(s1,s2){
    // Remove spaces and convert to lowercase
    s1 = s1.replace(/\s+/g, '').toLowerCase();
    s2 = s2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedS1 = s1.split('').sort().join('');
    const sortedS2 = s2.split('').sort().join('');

    // Compare the sorted strings
    return sortedS1 === sortedS2;   
}
isAnagram(str1, str2) ? console.log(`${str1} and ${str2} are anagrams`) : console.log(`${str1} and ${str2} are not anagrams`);