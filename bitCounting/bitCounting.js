function countBits(number) {
  const binaryString = number.toString(2).split('');
  const onesCounted = binaryString.filter(x => x === '1').length;
  return onesCounted;
}
console.log(countBits(7));
