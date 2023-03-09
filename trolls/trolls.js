
//

const ourString = "This website is for losers LOL!"
const vowels = ['a', 'e', 'i', 'o', 'u'];

function disemvowel(str) {
  const newStr = str.split('').map(letter => {
    if (vowels.includes(letter.toLowerCase())) {
      return '';
    } else {
      return letter;
    }
  });

  str = newStr.join('');

  return str;
}

console.log(disemvowel(ourString));