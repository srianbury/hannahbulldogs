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
      <Route exact path="/" component={Home} />
      <Route path="/parents" component={Parents} />
      <Route path="/puppies" component={Puppies} />
      <Route path="/gallery" component={Gallery} />
      <Route path='/login' component={Login} />
      <Route component={NoMatch} />
    </Switch>
  </>
);

const WithAuthentication = () => (
  <Authentication>
      <AppBase />
  </Authentication>
);

const App = withErrorBoundary(WithAuthentication, EntireAppCatcher);

export default AppContainer;
