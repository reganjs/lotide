const findKeyByValue = require("./findKeyByValue");

/* const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: , ${actual}, = , ${expected}`);
  } else {
    console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: , ${actual}, != , ${expected}`);
  }
};
*/

const findKey = (object, callback) => {
  for (let Key in object) {
    if (callback(object[Key])) {
      return Key;
    }
  }
  return undefined;
};


/* assertEqual(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2), "noma");

console.log(`---`);

assertEqual(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 3), "elBulli");
*/

module.exports = findKey;
