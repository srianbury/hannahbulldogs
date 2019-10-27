import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthUserContext } from "../Authentication";

const UserProfilePage = () => {
  const { authUser } = useContext(AuthUserContext);

  return (
    <Container>
      {authUser ? <UserProfileBase authUser={authUser} /> : <NotLoggedIn />}
    </Container>
  );
};

const UserProfileBase = ({ authUser }) => (
  <>
    <div>Username: {authUser.user.username}</div>
    <div>ID: {authUser.user._id}</div>
    <div>Access: {authUser.user.access}</div>
    <div>Email: {authUser.user.email}</div>
  </>
);

const NotLoggedIn = () => <>You are not logged in.</>;

export default UserProfilePage;
