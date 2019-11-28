import React, { useContext } from 'react';
import { AuthUserContext } from '../Authentication';
/**
 * Renders a component if the correct auth permissions are met.
 * Otherwise render a fallback.
 * @param {Object} {
 *   accessLevels, (array of strings)
 *   Fallback, fallback component | null
 *   ...rest
 * }
 * @returns Component
 */
const withAuthorizationHOC = Component => ({
  accessLevels,
  Fallback,
  ...rest
}) => {
  const { authUser } = useContext(AuthUserContext);

  if (withAuthorization(authUser, accessLevels)) {
    return <Component {...rest} />;
  }

  if (typeof Fallback !== 'undefined') {
    return Fallback === null ? null : <Fallback />;
  }

  return <NotAuthorized />;
};

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

const NotAuthorized = () => (
  <div className="text-danger">Not Authorized</div>
);

export default withAuthorizationHOC;
export { withAuthorization, NotAuthorized };
