import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from '../Navbar';
import { withAuthentication } from '../Authentication';
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
import withDataContext from '../Context';
import './styles.css';

const AppContainer = () => (
  <Router basename="/" className="main">
    <App FallbackError={EntireAppCatcher} />
  </Router>
);

const withPage = Component => props => <Component {...props} />;

const AppBase = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path={ROUTES.HOME} component={withPage(Home)} />
      <Route
        path={`${ROUTES.PARENTS_EDIT}/:id`}
        component={EditParentPage}
      />
      <Route
        path={ROUTES.PARENTS}
        component={withPage(ParentsPage)}
      />
      <Route path={ROUTES.PUPPIES} component={withPage(LitterPage)} />
      <Route path={ROUTES.GALLERY} component={withPage(Gallery)} />
      <Route path={ROUTES.LOGIN} component={withPage(Login)} />
      <Route path={ROUTES.SIGN_UP} component={withPage(SignUp)} />
      <Route
        path={ROUTES.USER_PROFILE}
        component={withPage(UserProfilePage)}
      />
      <Route component={NoMatch} />
    </Switch>
    <Notifications />
  </>
);

const App = withErrorBoundary(
  withAuthentication(withDataContext(AppBase)),
);

export default AppContainer;
