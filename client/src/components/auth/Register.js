import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
        console.log('Password do not match')
    }else {
        console.log(formData)
    }
  }

  return (
    <div className="pt-96 landing pl-96">
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={e => submitHandler(e)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => changeHandler(e)}
            name="name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => changeHandler(e)}
            name="email"
          />
          <small>
            This site uses Gravatar so if you want a profile image use a
            gravatar email
          </small>
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
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => changeHandler(e)}
            minLength="6"
          />
        </div>
        <input type="submit" value="register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
