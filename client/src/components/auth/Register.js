import React, { useState } from "react";
import { Link, Redirect  } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";
// import axios from 'axios';

const Register = ({ setAlert, register, isAuthenticated }) => {
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
      register({ name, email, password });
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

    // Redirect if logged in
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

  return (
    <div className="landing flex justify-center items-center">
      <div
        className="form-card rounded-lg p-8 text-white"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" ,border:'1px solid #fff'}}
      >
        <h1 className="text-3xl text-center font-medium">
          Create Your Account Now For Free
        </h1>
        <Alert />
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="flex flex-col gap-y-6 pt-12">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={name}
                onChange={(e) => changeHandler(e)}
                name="name"
              />
            </div>
            <div className="flex flex-col relative">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={email}
                onChange={(e) => changeHandler(e)}
                name="email"
              />
              <small className="text-xs absolute bottom-0 transform translate-y-full font-medium">
                This site uses Gravatar so if you want a profile image use a
                gravatar email
              </small>
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                name="password"
                value={password}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={confirmPassword}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <button
              type="submit"
              className="button text-white origin-left rounded-lg font-medium py-3.5 w-24 text-center cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="redirect-btn relative transition-all duration-300 text-lg text-quinary font-medium hover:text-secondary"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
