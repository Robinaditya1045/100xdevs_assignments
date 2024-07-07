/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
  // console.log(str1)
  let words = str1.split(" ").join("")
  // console.log(words)
  let rev = words.split("").reverse().join("");
  // console.log(rev);
  return words === rev;
}

// isPalindrome("A man a ,plan a canal Panama")

module.exports = isPalindrome;
