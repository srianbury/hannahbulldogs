import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AuthUserContext } from "../../Authentication";
import { useHistory } from "react-router-dom";
import showProfileButton from './showProfileButton';

const ProfileDropdown = () => {
  const history = useHistory();
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  function handleLogout() {
    setAuthUser(null);
    history.push("/");
  }

  return (
    <>
      {showProfileButton(process.env.NODE_ENV, authUser) && (
        <Dropdown navbar>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {authUser ? authUser.user.username : "Guest"}
          </Dropdown.Toggle>

          <Dropdown.Menu flip={true}>
            {authUser ? (
              <LoggedIn handleLogout={handleLogout} history={history} />
            ) : (
              <NotLoggedIn history={history} />
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

const LoggedIn = ({ handleLogout, history }) => (
  <>
    <Dropdown.Item onClick={() => history.push("/profile")}>
      Profile
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
  </>
);

const NotLoggedIn = ({ history }) => (
  <>
    <Dropdown.Item onClick={() => history.push("/login")}>Login</Dropdown.Item>
  </>
);

export default ProfileDropdown;
