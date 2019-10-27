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
import { ROUTES } from '../../Constants';
import './styles.css';

const Puppies = () => <div>Puppies Page</div>;
const Gallery = () => <div>Gallery Page</div>;

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
      <Route path={ROUTES.PARENTS} component={ParentsPage} />
      <Route path={ROUTES.PUPPIES} component={Puppies} />
      <Route path={ROUTES.GALLERY} component={Gallery} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.USER_PROFILE} component={UserProfilePage} />
      <Route component={NoMatch} />
    </Switch>
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
