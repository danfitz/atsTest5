const Immutable = require('immutable');

// transform into a map with attributes being keys, and values being a list of animals from the original list
// who have the attribute as 'true'
// e.g. in the fromShape, we have cat and snake with 'long' == true
// so in the toShape, we want long: [ 'cat', 'snake' ]
const transform = (fromShape) => {
  // Creates empty Map
  let toShape = Immutable.Map();

  fromShape.forEach((animalAttrs, animalName) => {
    // For each attribute in each animal...
    animalAttrs.forEach((bool, attr) => {
      // If toShape has that attribute as a key...
      if (toShape.has(attr)) {
        // If that attribute is true, add that animal to the List of animals with that attribute
        bool ? toShape = toShape.set(attr, toShape.get(attr).push(animalName)) : null;
      // Otherwise the attribute hasn't been added to the toShape yet...
      } else {
        // So if attribute is true, create a new List with animal as the first item
        bool ? toShape = toShape.set(attr, Immutable.List([animalName])) : null;
      };
    })
  });

  return toShape;
};

const fromShape = Immutable.fromJS({
  dog: {
    cute: true,
    long: false,
    smart: false,
  },
  cat: {
    cute: true,
    long: true,
    smart: true,
  },
  bird: {
    cute: true,
    long: false,
    smart: false,
  },
  snake: {
    cute: false,
    long: true,
    smart: false,
  },
});

const toShape = Immutable.fromJS({
  cute: [
    'dog',
    'cat',
    'bird',
  ],
  long: [
    'cat',
    'snake',
  ],
  smart: [
    'cat',
  ],
});

module.exports = {
  transform,
  toShape,
  fromShape,
};