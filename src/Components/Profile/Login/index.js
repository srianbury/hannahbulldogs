import React, { useState, useContext } from 'react';
import { AuthUserContext } from '../../Authentication';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { SignUpLink } from '../../SignUp';
import { ROUTES, STORAGE } from '../../../Constants';
import './styles.css';

const LoginPage = () => (
  <Container>
    <Login />
    <SignUpLink />
  </Container>
);

const Login = () => {
  const { setAuthUser } = useContext(AuthUserContext);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSignIn() {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.PUBLIC_URL}/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        },
      );

      const { ok } = response;
      if (ok) {
        const user = await response.json();
        setAuthUser(user);
        if (keepMeLoggedIn) {
          localStorage.setItem(STORAGE.USER, JSON.stringify(user));
        }
        history.push('/');
      } else {
        const { status } = response;
        switch (status) {
          case 404:
          case 401:
            const result = await response.json();
            const { error } = result;
            throw new Error(error);
          default:
            throw new Error('Something went wrong...');
        }
      }
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }

  return (
    <Row>
      <Col md="6">
        {error && (
          <div
            onClick={() => setError(false)}
            className="text-danger hover"
          >
            {error.message}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            disabled={loading}
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-check">
          <input
            onChange={() => setKeepMeLoggedIn(prev => !prev)}
            className="form-check-input"
            type="checkbox"
            checked={keepMeLoggedIn}
            id="keepmeloggedin"
          />
          <label class="form-check-label" for="keepmeloggedin">
            Keep me logged in
          </label>
        </div>

        <button
          onClick={handleSignIn}
          className="btn btn-sm btn-primary"
        >
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}{' '}
          Login
        </button>
      </Col>
    </Row>
  );
};

const LoginLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.LOGIN}>Sign In</Link>
  </p>
);

export default LoginPage;
export { LoginLink };
