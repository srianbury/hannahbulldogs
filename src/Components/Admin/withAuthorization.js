import React, { useContext } from "react";
import { AuthUserContext } from "../Authentication";

const withAuthorization = (Comp, auth) => props => (
  <>
    {auth && <Comp {...props} />}
  </>
);

export default withAuthorization;
