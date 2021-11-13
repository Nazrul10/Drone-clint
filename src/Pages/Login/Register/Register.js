import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Register.css'
const Register = () => {
  const history = useHistory()
    const {registerUser, isLoading} = useAuth()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    //email
    const signWithEmail = (e) =>{
        setEmail(e.target.value)
    }
    //pass
    const signWithPass = (e) =>{
        setPass(e.target.value)
    }
    const handleSubmit = (e) =>{
      registerUser(email, pass, name, history)
      e.preventDefault()
  };
    const updateName = e => {
      setName(e.target.value)
    }

  return (
    <div id="login-box">
<div class="left">
<h1>Sign up</h1>
<form onSubmit={handleSubmit}>
<input onBlur={updateName} type="text" name="name" placeholder="Name" />
<input onBlur={signWithEmail} type="text" name="email" placeholder="E-mail" />
<input onBlur={signWithPass} type="password" name="password" placeholder="Password" />

<input type="submit" name="signup_submit" value="Sign up" />
</form>
<div className="login-margin">
<Link to="/login">
<p>Already have an account?</p>
</Link>
</div>
</div>
{isLoading &&  <Spinner animation="border" variant="danger" />}
</div>
  );
};

export default Register;