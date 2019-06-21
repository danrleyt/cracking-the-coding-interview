/*
  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures ?
*/

//1.1 - Solution 1

function isUnique(str) {
  let map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  for (let el in map) {
    if (map[el] > 1) return false;
  }
  return true;
}

console.log(isUnique('ab'));

//1.1 - Solution 2

function isUnique(str) {
  let arr = str.split('').sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) return false;
  }
  return true;
}

console.log(isUnique('isnque'));
