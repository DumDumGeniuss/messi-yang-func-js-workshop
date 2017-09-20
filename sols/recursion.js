function getDependencies(tree) {
  if (!tree) {
    return [];
  }
  var depends = [];
  Object.keys(tree.dependencies || []).forEach(function (key) {
    var dependObj = tree.dependencies[key];
    depends.push(key + '@' + dependObj.version);

    // Get all sub dependencies of dependObj
    var childDepends = getDependencies(dependObj);

    // There may be duplicated dependency
    childDepends.forEach(function (childDepend) {
      if (depends.indexOf(childDepend) === -1) {
        depends.push(childDepend);
      }
    });
  });

  // Sort array
  return depends.sort();
}

module.exports = getDependencies;