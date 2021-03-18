import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {  email, password } = formData;

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('success');
  }

  return (
    <div className="pt-96 landing pl-96">
      <h1>Log In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={e => submitHandler(e)}>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => changeHandler(e)}
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
            minLength="6"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <p>
        Dont have an account? <Link to="/register">Sign In</Link>
      </p>
    </div>
  );
};

export default Login;
