import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
// import axios from 'axios';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Password do not match", "danger");
    } else {
      // const newUser = {
      //     name,
      //     email,
      //     password
      // }
      // try {
      //     const config = {
      //         headers: {
      //             'Content-Type': 'application/json'
      //         }
      //     }
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post('/api/users', body, config);
      //     console.log(res.data);
      // } catch (error) {
      //     console.error(error.response.data);
      // }
    }
  };

  return (
    <div className="pt-96 landing pl-96">
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <Alert />
      <form onSubmit={(e) => submitHandler(e)}>
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
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
