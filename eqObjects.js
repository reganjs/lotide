const eqArrays = (arr1, arr2) => { //
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍🏻👍🏻👍🏻 Assertion Passed: , ${actual}, = , ${expected}`);
  } else {
    console.log(` 👎🏻👎🏻👎🏻 Assertion Failed: , ${actual}, != , ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keyOneList = Object.keys(object1);
  const keyTwoList = Object.keys(object2);

  if(keyOneList.length !== keyTwoList.length) {
    return false;
  }
  for (const key of keyOneList) {
    let keyOneValue = object1[key]
    let keyTwoValue = object2[key]
    if (Array.isArray(keyOneValue) && Array.isArray(keyTwoValue)) {
      return eqArrays(keyOneValue, keyTwoValue);
    }
    else if (keyOneValue !== keyTwoValue) {
      return false;
    }
  }
  return true;
};

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc) => false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false