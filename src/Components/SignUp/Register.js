import {useState, useEffect} from 'react';
import './SignIn.css';
import axios from 'axios';

const Register = ({setIsRegisterPage}) => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [popup, setPopup] = useState ({
    msg: '',
    visible: false,
  });

  const handleSignInSubmit = e => {
    e.preventDefault ();

    console.log (name, email, password);
    axios
      .post ('http://localhost:3001/register', {name, email, password})
      .then (res => {
        if (res.data === 'done') setIsRegisterPage (false);
        else {
          setPopup ({
            msg: res.data,
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

  return (
    <div className="container-sm cnt">
      {popup.visible && popup.msg}

      <div className="form-group">
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          id="user_name"
          placeholder="Enter Name"
          onChange={e => setName (e.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user_email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="user_email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={e => setEmail (e.target.value)}
          value={email}
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
  );
};

export default Register;
