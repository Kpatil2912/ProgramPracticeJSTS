var lengthOfLongestSubstring = function(s) {
    let charIndex = {};
    let left = 0;
    let maxLength = 0;

for (let right = 0; right < s.length; right++) {
const char = s[right];

if (char in charIndex && charIndex[char] >= left) {
  left = charIndex[char] + 1; // Move left past the duplicate
}

charIndex[char] = right; // Update last seen index
maxLength = Math.max(maxLength, right - left + 1);
}

return maxLength;
};
let  str = "pwwkew" ;
console.log(lengthOfLongestSubstring(str));