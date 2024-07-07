/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lower1 = str1.toLowerCase()
  let lower2 = str2.toLowerCase()
  let str1Arr = lower1.split('').sort().join('');
  let str2Arr = lower2.split('').sort().join('');
  // console.log(str1Arr === str2Arr)
  return str1Arr === str2Arr;
}

// isAnagram('Debit Card', 'Bad Credit')
module.exports = isAnagram;
