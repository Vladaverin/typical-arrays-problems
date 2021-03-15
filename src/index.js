
exports.min = function min(array) {
  if (array.length == 0) {
    return 0;
  } else if (array.length !== 0) {
    return Math.min.apply(null, array);
  }
}

exports.max = function max(array) {
  if (array.length == 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg(array) {
  let sum = array.reduce((a, b) => a + b, 0);
  let result = sum / array.length;
  return result;
}
