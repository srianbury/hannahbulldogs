import React, { useState, useEffect } from 'react';
import AuthUserContext from './context';
import { STORAGE } from '../../Constants';

const Authentication = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(STORAGE.USER));
    if (user) {
      setAuthUser(user);
    }
  }, []);

  return (
    <AuthUserContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

const withAuthentication = Component => props => (
  <Authentication>
    <Component {...props} />
  </Authentication>
);

export default Authentication;
export { withAuthentication, AuthUserContext };
