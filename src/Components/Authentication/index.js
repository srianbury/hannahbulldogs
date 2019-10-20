import React, { useState } from "react";
import AuthUserContext from './context';

const Authentication = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthUserContext.Provider
      value={{
        authUser,
        setAuthUser
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};


export default Authentication;
export { AuthUserContext };
