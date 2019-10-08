const Immutable = require('immutable');

// similar to test6, but group the elements by what they would be mapped to in fizzbuzz 
const transform = (fromShape) => {
  // Create structure for empty Map
  let toShape = Immutable.Map({
    fizz: Immutable.List(),
    buzz: Immutable.List(),
    fizzbuzz: Immutable.List(),
    other: Immutable.List()
  });

  // For each number in fromShape...
  fromShape.forEach(num => {
    // If it's a multiple of 3 and 5, add number to "fizzbuzz" List
    if (num % 3 === 0 && num % 5 === 0) {
      toShape = toShape.update("fizzbuzz", nums => nums.push(num));
    // If it's a multiple of 3 only, add number to "fizz" List
    } else if (num % 3 === 0) {
      toShape = toShape.update("fizz", nums => nums.push(num));
    // If it's a multiple of 5 only, add number to "buzz" List
    } else if (num % 5 === 0) {
      toShape = toShape.update("buzz", nums => nums.push(num));
    // Otherwise, number goes into "other" List
    } else {
      toShape = toShape.update("other", nums => nums.push(num));
    };
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

const toShape = Immutable.fromJS({
  fizz: [
    12,
    18,
  ],
  buzz: [
    10,
    20,
  ],
  fizzbuzz: [
    15,
  ],
  other: [
    11,
    13,
    14,
    16,
    17,
    19,
  ],
});

module.exports = {
  transform,
  toShape,
  fromShape,
};