//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  const wordChange = s.replace(/[,:, ]/g, "").toLowerCase();
  const wordReverse = wordChange.split("").reverse().join("");
  console.log(wordReverse);
  if (wordReverse === wordChange) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
