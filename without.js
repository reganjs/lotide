/* const eqArrays = (arr1, arr2) => {
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
}; */ 

const without = (source, removeSource) => {
  let withoutArr = source;
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < removeSource.length; y++) {
      if (source[i] === removeSource[y]) {
        withoutArr.splice(i, 1);
      }
    }
  }
  return withoutArr
}

//console.log(assertArraysEqual(without([1, 2, 3], [1]) => [2, 3]
//console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) => ["1", "2"]