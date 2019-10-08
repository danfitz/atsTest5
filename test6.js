const Immutable = require('immutable');

// map 'fizzbuzz' if multiple of three AND five, 'fizz' if multiple of three, 'buzz' if multiple of five, or just the number else
const transform = (fromShape) => {
  const toShape = fromShape.map(num => {
    // If number is either a multiple of three OR five...
    if (num % 3 === 0 || num % 5 === 0) {
      // Concatenate "fizz" AND/OR "buzz" to a new string and return it
      let targetValue = "";
      num % 3 === 0 ? targetValue += "fizz" : null;
      num % 5 === 0 ? targetValue += "buzz" : null;
      return targetValue; 
    };

    // Otherwise, just return the number
    return num;
  });

  return toShape;
};

const fromShape = Immutable.fromJS([
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]);

const toShape = Immutable.fromJS([
  'buzz',
  11,
  'fizz',
  13,
  14,
  'fizzbuzz',
  16,
  17,
  'fizz',
  19,
  'buzz',
]);

module.exports = {
  transform,
  toShape,
  fromShape,
};