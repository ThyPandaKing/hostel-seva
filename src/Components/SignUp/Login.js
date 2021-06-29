import {useState, useEffect} from 'react';
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [popup, setPopup] = useState ({
    msg: '',
    visible: false,
  });
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [auth, setAuth] = useState (false);

  const handleSignInSubmit = e => {
    e.preventDefault ();

    axios.post ('http://localhost:3001/login', {email, password}).then (res => {
      if (res.data.found === true) {
        // TODO: to improve this
        console.log (res.data.user);
        sessionStorage.setItem('user',JSON.stringify(res.data.user));
        setAuth (true);
      } else {
        setPopup ({
          msg: res.data.msg,
          visible: true,
        });
      }
    });
  };

  // TODO:removing the warning
  useEffect (
    () => {
      setTimeout (() => {
        setPopup ({
          visible: false,
        });
      }, 2000);
    },
    [popup.msg]
  );

  if (auth || sessionStorage.getItem ('user')) return <Redirect to="/" />;
  return (
    <div>

      <div className="container-sm cnt">
        {popup.visible && popup.msg}
        <div className="form-group">
          <label htmlFor="user_email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="user_email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={e => setEmail (e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_password">Password</label>
          <input
            type="password"
            className="form-control"
            id="user_password"
            placeholder="Password"
            onChange={e => setPassword (e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => handleSignInSubmit (e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
