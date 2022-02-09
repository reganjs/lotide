const eqArrays = (arr1, arr2) => { //
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: , ${actual} === ${expected}`);
  }
  else {
    console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: , ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    let letter = sentence[i]
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i)
      }
      else {
        results[letter] = [i]
      }
    }
  }
  return results;
};

const testSentence = "This is a test sentence."
console.log(letterPositions(testSentence))
