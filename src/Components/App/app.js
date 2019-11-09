import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Nav from '../Navbar';
import Authentication from '../Authentication';
import Login from '../Profile/Login';
import withErrorBoundary from '../Error/Boundary';
import Home from '../Home';
import EntireAppCatcher from '../Error/Entire';
import NoMatch from '../404';
import BottomNav from '../BottomNav';
import SignUp from '../SignUp';
import ParentsPage from '../Parents/Page';
import UserProfilePage from '../User';
import EditParentPage from '../Parents/Edit';
import { ROUTES } from '../../Constants';
import Notifications from '../Notifications';
import Gallery from '../Gallery';
import LitterPage from '../Litters';
import './styles.css';

const AppContainer = () => (
  <Router>
    <App />
  </Router>
);

const AppBase = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={`${ROUTES.PARENTS_EDIT}/:id`} component={EditParentPage} />
      <Route path={ROUTES.PARENTS} component={ParentsPage} />
      <Route path={ROUTES.PUPPIES} component={LitterPage} />
      <Route path={ROUTES.GALLERY} component={Gallery} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.USER_PROFILE} component={UserProfilePage} />
      <Route component={NoMatch} />
    </Switch>
    <Notifications />
    <BottomNav />
  </>
);

const WithAuthentication = () => (
  <Authentication>
      <AppBase />
  </Authentication>
);

const App = withErrorBoundary(WithAuthentication, EntireAppCatcher);

export default AppContainer;
