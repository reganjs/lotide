const tail = (arr) => {
  let end = [];
  for (let i = 1; i < arr.length; i++) {
    end.push(array[i]);
  }
  return end;
};

module.exports = tail;
