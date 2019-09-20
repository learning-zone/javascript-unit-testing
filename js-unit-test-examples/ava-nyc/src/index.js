module.exports = function () {
  this.add = function (a, b) {
    return a + b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };

  this.fibonacci = function (length) {
    var sequence = [0, 1];
    for (var i = 2; i <= length; ++i) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  };
};
