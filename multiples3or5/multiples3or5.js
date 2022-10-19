//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
//https://projecteuler.net/problem=1

/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) */

const n = -1;

//Solution function according to given number:
function solution(n) {
  //Build array of numbers below n:
  const numbers = Array.from({ length: n - 1 }, (_, x) => x + 1);

  // const numbers = [...Array(n).keys()];
  // numbers.shift();

  console.log(numbers);


  //Returns an array of numbers multiplied by 3:
  const multipliedBy3 = numbers.map(num => num * 3);
  console.log(multipliedBy3);

  //Returns an array of numbers multiplied by 5:
  const multipliedBy5 = numbers.map(num => num * 5);
  console.log(multipliedBy5);

  //Returns an array of all numbers of multpliedBy3 that are under the value of number:
  const underNumberFor3 = multipliedBy3.filter(num => num < n && num > 0);
  console.log(underNumberFor3);

  //Returns an array of all numbers of multpliedBy5 that are under the value of number:
  const underNumberFor5 = multipliedBy5.filter(num => num < n && num > 0);
  console.log(underNumberFor5);

  //Combines arrays into one array:
  const tempArray = [...underNumberFor3, ...underNumberFor5];
  console.log(tempArray);

  //Sort out duplicates of combined array:
  const set = [...new Set(tempArray)];
  console.log(`My set is: ${[...set]}`);

  //Sum up of all numbers in set:
  const sumOfNumbers = set.reduce((acc, num) => acc + num, 0);
  console.log(sumOfNumbers);

  return sumOfNumbers;
}
solution(n);

console.log(`Given the number ${n}, the solution is ${solution(n)}.`);