/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let str1 = str.split('')
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === 'a' || str1[i] === 'e'
      || str1[i] === 'i' || str1[i] === 'o'
      || str1[i] === 'u' || str1[i] === 'A' ||
      str1[i] === 'E' || str1[i] === 'I' ||
      str1[i] === 'O' || str1[i] === 'U') {
        count++;
        }
      }
    // console.log(count)
    return count
}

// countVowels("fdasfadsfads")

module.exports = countVowels;