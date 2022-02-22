const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: , ${actual}, = , ${expected}`);
  } else {
    console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: , ${actual}, != , ${expected}`);
  }
};

const countLetters = (sentence) => {
  let result = {};
  for (const allLetters of sentence) {
    if (allLetters !== " ") {
      if (result[allLetters]) {
        result[allLetters] += 1;
      } else {
        result[allLetters] = 1;
      }
    }
  }
  return result;
};

const testSentence = "This is a test sentence."
console.log(countLetters(testSentence))

module.exports = countLetters;
