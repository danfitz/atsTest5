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
    // Set target key based on whether number is a multiple of 3, 5, both, or neither
    let targetKey = "";
    if (num % 3 !== 0 && num % 5 !== 0) {
      targetKey = "other";
    } else {
      num % 3 === 0 ? targetKey += "fizz" : null;
      num % 5 === 0 ? targetKey += "buzz" : null;
    };

    // Add number to List at target key
    toShape = toShape.update(targetKey, nums => nums.push(num));
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