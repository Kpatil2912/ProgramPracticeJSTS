/**
 * Rearranges the elements of an array so that all odd numbers appear before all even numbers.
 * This is done in-place, modifying the original array without creating a new one.
 * 
 * Algorithm:
 * - Uses a two-pointer approach:
 *   - `left` starts at the beginning of the array.
 *   - `right` starts at the end of the array.
 * - Odd and even numbers are identified using the modulo operator (%):
 *   - `arr[left] % 2 !== 0`: Checks if the number at the `left` pointer is odd.
 *   - `arr[right] % 2 === 0`: Checks if the number at the `right` pointer is even.
 * - The function swaps elements when an even number is found on the left side and an odd number is found on the right side.
 * - The process continues until the `left` and `right` pointers meet.
 * 
 * Time Complexity: O(n) - Each element is processed at most once.
 * Space Complexity: O(1) - Operates in-place without using extra space.
 * 
 * Example:
 * Input: [3, 8, 5, 2, 7, 4, 1, 6]
 * Output: [3, 1, 5, 7, 2, 4, 8, 6] (odd numbers on the left, even numbers on the right)
 * 
 * Note: The order of odd or even numbers within their respective groups is not guaranteed.
 * 
 * @param arr - The array of numbers to be rearranged.
 */
function arrangeOddEven(arr: number[]): void {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] % 2 !== 0) left++;
    while (left < right && arr[right] % 2 === 0) right--;
    if (left < right) [arr[left], arr[right]] = [arr[right], arr[left]];
  }
}

const arr = [3, 8, 5, 2, 7, 4, 1, 6];
console.log('Before:', arr);
arrangeOddEven(arr);
console.log('After:', arr);