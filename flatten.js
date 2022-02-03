/* const eqArrays = (arr1, arr2) => { //
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


const flatten = (arr) => {
    const flattenedArr = []
    for (let item of arr) {
        if (Array.isArray(item)) {
            for (let subItem of item) {
                flattenedArr.push(subItem)
            }
        } else {
            flattenedArr.push(item)
        }
    }
    return flattenedArr;
}

console.log(flatten([1, 2, [3, 4], 5]))