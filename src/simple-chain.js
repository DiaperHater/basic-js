const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {

    this.chain.push('( ' + String(value) + ' )~~');

    return this;
  },

  removeLink(position) {

    //elements starts from 1 instead 0
    position = position - 1;

    if(position % 1 != 0 || this.chain[position] == undefined) {
      this.reset();
      throw Error();
    }

    this.chain.splice(position, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const lastIndex = this.getLength() - 1;
    let lastElement = this.chain[lastIndex];
    this.chain[lastIndex] = lastElement.replace('~~', '');

    const str = this.chain.join('');
    this.reset();
    return str;
  },

  reset() {
    this.chain.splice(0);
  }
};

module.exports = chainMaker;
