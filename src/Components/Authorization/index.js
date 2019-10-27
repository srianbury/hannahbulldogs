/**
 * @param {object} authUser (auth user context)
 * @param {array} accessLevels (array of access levels (strings) that have access to the item)
 * @returns {boolean} whether or not the user has access
 */
function withAuthorization(authUser, accessLevels) {
  try {
    if (
      authUser &&
      authUser.user &&
      authUser.user.access &&
      accessLevels.includes(authUser.user.access)
    ) {
      return true;
    }

    return false;
    
  } catch {
    return false;
  }
}

export default withAuthorization;
