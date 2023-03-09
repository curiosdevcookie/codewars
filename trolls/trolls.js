
//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const ourString = "This website is for losers LOL!"
const vowels = ['a', 'e', 'i', 'o', 'u'];

function disemvowel(str) {
  const newStr = str.split('').filter((letter) => !vowels.includes(letter.toLowerCase()));

  str = newStr.join('');

  return str;
}

console.log(disemvowel(ourString));