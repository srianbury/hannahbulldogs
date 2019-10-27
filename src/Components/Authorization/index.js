import React from 'react';

// Fallback
// if nothing is pass a default component will return
// if null is passed null will return
// if a fallback is given it will return that
const withAuthorizationHOC = (Component) => (props) => {
  const { authUser, accessLevels, Fallback, ...rest } = props;

  if(withAuthorization(authUser, accessLevels)){
    return(
      <Component 
        {...rest} />
    );
  } 

  if(typeof(Fallback) !== 'undefined'){
    return Fallback === null ? null : <Fallback />
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
  <div className='text-danger'>Not Authorized</div>
);


export default withAuthorizationHOC;
export { withAuthorization, NotAuthorized };
