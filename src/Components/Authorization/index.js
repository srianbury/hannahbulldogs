import React, { useContext } from 'react';
import { AuthUserContext } from '../Authentication';
/**
 * Renders a component if the correct auth permissions are met.
 * Otherwise render a fallback.
 * @param {Object} {
 *   editAccess, (array of strings)
 *   Fallback, fallback component | null
 *   ...rest
 * }
 * @returns Component
 */
const withAuthorizationHOC = Component => ({
  editAccess,
  Fallback,
  ...rest
}) => {
  const { authUser } = useContext(AuthUserContext);

  if (withAuthorization(authUser, editAccess)) {
    return <Component {...rest} />;
  }

  if (typeof Fallback !== 'undefined') {
    return Fallback === null ? null : <Fallback />;
  }

  return <NotAuthorized />;
};

/**
 * @param {object} authUser (auth user context)
 * @param {array} editAccess (array of access levels (strings) that have access to the item)
 * @returns {boolean} whether or not the user has access
 */
function withAuthorization(authUser, editAccess) {
  try {
    if (
      authUser &&
      authUser.user &&
      authUser.user.access &&
      editAccess.includes(authUser.user.access)
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
