import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import {useLocation, useHistory} from 'react-router';
import useAuth from '../../Hook/useAuth';
import './Login.css'
const Login = () => {

  const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

  const {logIn, user, isLoading} = useAuth()
  const [email, setEmail] = useState();
  const [password, setPass] = useState()

  //email
  const getEmail = (e) =>{
      setEmail(e.target.value)
  }
  //pass
  const getpass = (e) =>{
      setPass(e.target.value)
  }
  const handleLogin = (e) =>{
    logIn(email, password)
    .then((result) => {
        history.push(redirect_uri)
      })
      e.preventDefault();
  }
  return (
    <div className="login-container">
    <div className="container">
<section id="content">
<form onSubmit={handleLogin}>
<h1>Login Form</h1>
<div>
<input onBlur={getEmail} type="text" placeholder="Username" required="" id="username" />
</div>
<div>
<input onBlur={getpass} type="password" placeholder="Password" required="" id="password" />
</div>
<div className="btn-padding">
<input type="submit" value="Log in" />
</div>
</form>
<Link to="/resister">
<p className="already-acnt">Create a new Account</p>
</Link>
</section>
{isLoading &&  <Spinner animation="border" variant="danger" />}
{user.email && <Alert>
    login successfully!
  </Alert>}
</div>
</div>
  );
};

export default Login;