import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AuthUserContext } from "../../Authentication";
import { useHistory } from "react-router-dom";
import showProfileButton from './showProfileButton';
import { ROUTES, STORAGE } from '../../../Constants';

const ProfileDropdown = () => {
  const history = useHistory();
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  function handleLogout() {
    setAuthUser(null);
    localStorage.removeItem(STORAGE.USER);
    history.push(ROUTES.HOME);
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
    <Dropdown.Item onClick={() => history.push(ROUTES.USER_PROFILE)}>
      Profile
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
  </>
);

const NotLoggedIn = ({ history }) => (
  <>
    <Dropdown.Item onClick={() => history.push(ROUTES.LOGIN)}>Login</Dropdown.Item>
  </>
);

export default ProfileDropdown;
