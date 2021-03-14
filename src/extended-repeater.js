const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalStr = [];
  let repeatStr = String(str);
  options.addition = String(options.addition);
  if (options.repeatTimes <= 0 || options.repeatTimes == undefined) {
    options.repeatTimes = 0;
  }

  if (options.separator == undefined) {
    options.separator = '+';
  }

  if (options.additionRepeatTimes <= 0 || options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 0;
  }

  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes == 0 && options.additionRepeatTimes == 0) {
    return repeatStr + options.addition;
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      finalStr.push(repeatStr);
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        finalStr.push(options.addition);
        if (j < options.additionRepeatTimes - 1) {
          finalStr.push(options.additionSeparator);
        }
      }
      if (i < options.repeatTimes - 1) {
        finalStr.push(options.separator);
      }
    }
  }

  return finalStr.join('');
};
  