/**
 * Reverses the digits of a given integer using a while loop.
 * Preserves the sign of the number.
 *
 * @param {number} num - The number to reverse.
 * @returns {number} - The reversed number.
 */
let reverseNumber = function (num) {
    let reversed = 0;
    const isNegative = num < 0;

    num = Math.abs(num);

    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -reversed : reversed;
};

console.log(reverseNumber(-12345));   // Output: -54321

/**
 * Reverses the digits of a given integer using string manipulation.
 * Preserves the sign of the number.
 *
 * @param {number} num - The number to reverse.
 * @returns {number} - The reversed number.
 */
let reverseNumberShort = function (num) {
    const reversed = parseInt(
        num.toString().split('').reverse().join('')
    ) * Math.sign(num);

    return reversed;
};

console.log(reverseNumberShort(12345));   // Output: 54321
