const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  finalStr: '',
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.str.push('( )');
    } else {
      this.str.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position > this.str.length-1 || position < 0) {
      this.str = [];
      throw Error;
    } else {
      this.str.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    this.finalStr = this.str.join('~~');
    this.str = [];
    return this.finalStr;
  }
};

module.exports = chainMaker;
