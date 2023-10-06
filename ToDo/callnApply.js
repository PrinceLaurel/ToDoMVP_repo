function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

module.exports = forEach;

const callAndApply = {
  caller(object, method, taskArg, dateArg) {
    method.call(object, taskArg, dateArg);
  },
  applier(object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  },
};
module.exports = callAndApply;