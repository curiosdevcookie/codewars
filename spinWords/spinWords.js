//https://www.codewars.com/kata/5264d2b162488dc400000001/javascript
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const string = 'Welcome to the jungle';
console.log(string);

function spinWords(string) {

  //Split the string into an array of words:
  const words = string.split(' ');

  //Take words with 5 or more letters,
  const reversedWords = words.map(word => {
    return ((word.length >= 5) ?
      // reverse the letters of those words and join them back together,
      word.split('').reverse().join('')
      // return words that are less than five letters as is.
      : word);
  });
  //stick them back together into a string and return from the function.  

  const stringReversed = reversedWords.join(' ');
  return stringReversed;
}

spinWords(string);

console.log(spinWords(string));
