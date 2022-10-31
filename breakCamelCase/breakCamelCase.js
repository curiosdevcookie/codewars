//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

/*Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const string = 'camelCasing';

function solution(string) {
  const camelCase = string.split(/(?=[A-Z])/).join(' ');
  return camelCase;
}
