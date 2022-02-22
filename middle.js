const middle = function (arr3) {
let arr4 = []; 
if (arr3.length < 3) {
  return arr4;
} else if (arr3.length % 2 === 0) {
  arr4.push(arr3[Math.floor(arr3.length - 1 / 2)]);
  return arr4;
} else if (arr3.length % 2 !== 0) {
  arr4.push(arr3[Math.floor(arr3.length / 2)]);
  return arr4;
}
return arr4;
};

module.exports = middle;
