/**
 * Question: Write a function to remove duplicate words from a given string.
 * The function should return a new string with only the first occurrence of each word preserved.
 */

const inputString = 'this is a this is a duplicate words string of words';

function removeDuplicateWordsFromString(input) {
    const seenWords = {};
    const uniqueWords = [];

    const wordsArray = input.split(' ');

    for (const word of wordsArray) {
        if (!seenWords[word]) {
            seenWords[word] = true;
            uniqueWords.push(word);
        }
    }

    return uniqueWords.join(' ');
}

console.log(removeDuplicateWordsFromString(inputString));