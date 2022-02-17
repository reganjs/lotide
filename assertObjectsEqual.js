const eqArrays = (arr1, arr2) => { //
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const keyOneList = Object.keys(object1);
  const keyTwoList = Object.keys(object2);

  if (keyOneList.length !== keyTwoList.length) {
    return false;
  }
  for (const key of keyOneList) {
    let keyOneValue = object1[key]
    let keyTwoValue = object2[key]
    if (Array.isArray(keyOneValue) && Array.isArray(keyTwoValue)) {
      return eqArrays(keyOneValue, keyTwoValue);
    } else if (keyOneValue !== keyTwoValue) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

/* const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); */