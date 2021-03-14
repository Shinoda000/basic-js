const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNum = 2 ** disksNumber - 1;
  let secondsToComplete = Math.floor(turnsNum / (turnsSpeed / 3600));
  return {turns: turnsNum, seconds: secondsToComplete};
};
