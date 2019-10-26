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
import { ROUTES } from '../../Constants';
import './styles.css';

const Parents = () => <div>Parents Page</div>;
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
      <Route path={ROUTES.PARENTS} component={Parents} />
      <Route path={ROUTES.PUPPIES} component={Puppies} />
      <Route path={ROUTES.GALLERY} component={Gallery} />
      <Route path={ROUTES.LOGIN} component={Login} />
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
