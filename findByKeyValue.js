const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: , ${actual}, = , ${expected}`);
  } else {
    console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: , ${actual}, != , ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  let objectKey = Object.keys(obj)
  for (let i = 0; i < objectKey.length; i++) {

    if (obj[objectKey[i]] === value) {
      return objectKey[i];
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);