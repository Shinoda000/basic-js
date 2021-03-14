const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' && Number(sampleActivity) > 0) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
    if (t < 0) {
      return false;
    } else {
      return t;
    }
  } else {
    return false;
  }
};
