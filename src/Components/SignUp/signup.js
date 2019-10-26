import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { LoginLink } from "../Profile/Login";
import formatErrors from '../Error/Parameters';
import { AuthUserContext } from '../Authentication';
import { ROUTES } from "../../Constants";

const SignUpPage = () => (
  <Container>
    <SignUp />
    <LoginLink />
  </Container>
);

const SignUp = () => {
  const { setAuthUser } = useContext(AuthUserContext);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSignUp() {
    setError(null);
    setLoading(true);
    function onSuccess(user) {
      setAuthUser(user);
      history.push("/");
    }
    function onError(e) {
      setLoading(false);
      setError(e);
    }
    signUp(username, email, password, confirmPwd, onSuccess, onError);
  }

  return (
    <Row>
      <Col md="6">
        <h5>Sign Up</h5>
        {error && (
          <div onClick={() => setError(false)} class="text-danger hover">
            {error.message}
          </div>
        )}

        <div class="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            disabled={loading}
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>

        <div class="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div class="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            value={confirmPwd}
            onChange={e => setConfirmPwd(e.target.value)}
            disabled={loading}
            type="password"
            class="form-control"
            id="confirmPwd"
            placeholder="Confirm Password"
          />
        </div>

        <button onClick={handleSignUp} className="btn btn-sm btn-primary">
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}{" "}
          Sign Up
        </button>
      </Col>
    </Row>
  );
};

async function signUp(username, email, password, confirmPassword, onSuccess, onError) {
  try {
    const response = await fetch("http://localhost:4020/api/dev/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, confirmPassword })
    });
    const { ok } = response;
    if (ok) {
      const user = await response.json();
      onSuccess(user);
    } else {
      const { status } = response;
      switch (status) {
        case 422:
          const result = await response.json();
          const { error } = result;
          const formattedErrors = formatErrors(error);
          onError(new Error(formattedErrors));
          break;
        default:
          throw new Error("Something went wrong...");
      }
    }
  } catch {
    onError(new Error("Something went wrong..."));
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpLink };
