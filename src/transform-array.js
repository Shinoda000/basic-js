const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let transformers = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];

  let i = 0;

  while (i < arr.length) {
    if (transformers.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    } else {
      if (arr[i] == transformers[0]) {
        i++;
      } else if (arr[i] == transformers[1]) {
        newArr = newArr.pop();
      } else if (arr[i] == transformers[2]) {
        newArr.push(arr[i+1]);
      } else if (arr[i] == transformers[3]) {
        newArr.push(arr[i-1]);
      }
    }

    i++;
  }

  return newArr;
};
