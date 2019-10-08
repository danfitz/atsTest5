const Immutable = require('immutable');

// map 'fizzbuzz' if multiple of three AND five, 'fizz' if multiple of three, 'buzz' if multiple of five, or just the number else
const transform = (fromShape) => {
  // Mapping over each number...
  const toShape = fromShape.map(num => {
    // Concatenate "fizz" AND/OR "buzz" to a new string if number is multiple of 3 and/or 5
    let multipleString = "";
    num % 3 === 0 ? multipleString += "fizz" : null;
    num % 5 === 0 ? multipleString += "buzz" : null;

    // If string isn't empty, return it; otherwise return number itself
    return multipleString ? multipleString : num;
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