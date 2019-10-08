const Immutable = require('immutable');

// transform into object where the k is the letter of the alphabet, and the value is the number of time it occurs. 
const transform = (fromShape) => {
  // Create new Immutable Map
  let toShape = Immutable.Map();

  // For each letter in fromShape...
  fromShape.forEach(letter => {
    // Update the value associated to the letter key
    // IF value for letter key exists, add 1
    // OTHERWISE letter key and value don't exist, so start at 1
    toShape = toShape.update(letter, letterCount => letterCount ? letterCount + 1 : 1);
  });

  return toShape;
};

const fromShape = Immutable.fromJS([
  'a',
  'l',
  'l',
  'i',
  'e',
  'd',
  't',
  'e',
  'c',
  'h',
  'n',
  'i',
  'c',
  'a',
  'l',
  's',
  'e',
  'r',
  'v',
  'i',
  'c',
  'e',
  's',
]);

const toShape = Immutable.fromJS({
  a: 2,
  c: 3,
  d: 1,
  e: 4,
  h: 1,
  i: 3,
  l: 3,
  n: 1,
  r: 1,
  s: 2,
  t: 1,
  v: 1,
});

module.exports = {
  transform,
  toShape,
  fromShape,
};