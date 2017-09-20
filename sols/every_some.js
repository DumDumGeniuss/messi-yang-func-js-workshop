function checkUsersValid(goodUsers) {
  const isOneOfElement = function (uncheckedUser) {
    return goodUsers.some(function(validUser) {
      return validUser.id === uncheckedUser.id;
    });
  };
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(isOneOfElement);
  };
}

module.exports = checkUsersValid