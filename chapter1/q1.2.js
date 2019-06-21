/* Given two strings, write a method to decide if one is a permutation of the other */

//1.2 - Solution 1
function isPermutation(str1, str2) {
  return (
    str1
      .split('')
      .sort()
      .join('') ===
    str2
      .split('')
      .sort()
      .join('')
  );
}

console.log(isPermutation('abc', 'bca'));
