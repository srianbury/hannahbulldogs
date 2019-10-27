import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import withAuthorizationHOC from "../../Authorization";
import { ACCESS } from "../../../Constants";
import { AuthUserContext } from "../../Authentication";

const EditBase = () => <>Edit the parents Page</>;
const EditWithAuthorization = withAuthorizationHOC(EditBase);
const editAccess = [ACCESS.ADMIN, ACCESS.MINDFLAYER];

const EditParentPage = () => {
  const { authUser } = useContext(AuthUserContext);
  
  return (
    <Container>
      <EditWithAuthorization 
        authUser={authUser} 
        accessLevel={editAccess} />
    </Container>
  );
};

export default EditParentPage;
