const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  } else if (typeof date !== 'object') {
    throw Error;
  } else {
    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < months[i].length; j++) {
        if (date.toDateString().indexOf(months[i][j]) !== -1) {
          return seasons[i];
        }
      }
    }
  }
};

let months = [['Mar', 'Apr', 'May'], ['Jun', 'Jul', 'Aug'], ['Sep', 'Oct', 'Nov'], ['Dec', 'Jan', 'Feb']];
let seasons = ['spring', 'summer', 'autumn', 'winter'];