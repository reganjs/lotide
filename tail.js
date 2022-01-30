const assertEqual = require('./assertEqual');

const tail = (arr) => {
  let end = [];
  for (let i = 1; i < arr.length; i++) {
    end.push(array[i]);
  }
  return end;
};

module.exports = tail;

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!