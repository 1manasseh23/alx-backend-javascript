const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // You can add more cases for different operations if needed.
    return null;
  }
};

module.exports = Utils;
