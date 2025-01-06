const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (const domain of domains) {
    let dns = '';
    let firstDotIndex = 0;
    for (let i = domain.length - 1; i >= 0; i--) {
      if (domain[i] === '.' || i === 0) {
        if (firstDotIndex === 0) {
          firstDotIndex = i;
          dns += domain.slice(i);
        } else {
          if (i === 0) {
            dns += '.' + domain.slice(i, firstDotIndex);
          }
          else {
            dns += domain.slice(i, firstDotIndex);
          }
          firstDotIndex = i;
        }
        dnsStats[dns] = (dnsStats[dns] || 0) + 1;
      }
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
