const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  const numberStr = n.toString();
  for (let i = 0; i < numberStr.length; i++) {
    const modNumber = parseInt(numberStr.slice(0, i) + numberStr.slice(i + 1));
    maxNumber = Math.max(maxNumber, modNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
