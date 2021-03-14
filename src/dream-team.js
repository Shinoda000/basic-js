const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let codeName  = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        let currentName = members[i].replace(/\s+/g, '').toUpperCase();
        codeName.push(currentName[0]);
      }
    }
    return codeName.sort().join('');
  } else {
    return false;
  }
};