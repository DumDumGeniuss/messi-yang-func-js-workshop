function Spy(target, method) {
  // If nothing found
  if (!target || !method) {
    return;
  }

  // Keep original function
  var originFunc = target[method];

  // counts
  var spyObj = {
    count: 0,
  };

  // I ran into infinite roop, so I use another way to implement it
  target[method] = function () {
    spyObj.count += 1;
    return originFunc.apply(target, arguments);
  };

  return spyObj;
}

module.exports = Spy