import React, { useState, useContext } from "react";
import { AuthUserContext } from "../../Authentication";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { setAuthUser } = useContext(AuthUserContext);
  const [username, setUsername] = useState("");
  const history = useHistory();

  return (
    <div>
      <label htmlFor="username">Name:</label>
      <input
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={()=>signIn(username, setAuthUser, ()=>history.push('/'))}>Login</button>
    </div>
  );
};

function signIn(username, setUser, onSuccess) {
  // fetch, do some db call and verification
  try{
    const user = {
        userInfo: {
          username
        },
        auth: {
          isAdmin: true
        }
      };
      setUser(user);
      onSuccess();
  } catch(e){
      // do something
      console.log(e);
  }
  
}

export default Login;
