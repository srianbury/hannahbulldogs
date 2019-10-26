import React, { useState, useContext } from "react";
import { AuthUserContext } from "../../Authentication";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { SignUpLink } from "../../SignUp";
import { ROUTES } from "../../../Constants";
import "./styles.css";

const LoginPage = () => (
  <Container>
    <Login />
    <SignUpLink />
  </Container>
);

const Login = () => {
  const { setAuthUser } = useContext(AuthUserContext);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSignIn() {
    setLoading(true);
    function onSuccess(user) {
      setAuthUser(user);
      history.push("/");
    }
    function onError(e) {
      setLoading(false);
      setError(e);
    }
    signIn(username, password, onSuccess, onError);
  }

  return (
    <Row>
      <Col md="6">
        {error && (
          <div onClick={() => setError(false)} className="text-danger hover">
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

        <button onClick={handleSignIn} className="btn btn-sm btn-primary">
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}{" "}
          Login
        </button>
      </Col>
    </Row>
  );
};

async function signIn(username, password, onSuccess, onError) {
  // fetch, do some db call and verification
  try {
    const response = await fetch("http://localhost:4020/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const { ok } = response;
    if (ok) {
      const user = await response.json();
      onSuccess(user);
    } else {
      const { status } = response;
      switch (status) {
        case 404:
        case 401:
          const result = await response.json();
          const { error } = result;
          onError(new Error(error));
          break;
        default:
          throw new Error("Something went wrong...");
      }
    }
  } catch (e) {
    onError(e);
  }
}

const LoginLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.LOGIN}>Sign In</Link>
  </p>
);

export default LoginPage;
export { LoginLink };
