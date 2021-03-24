import React, {  useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
// import axios from "axios";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="landing flex justify-center items-center">
      <div
        className="form-card rounded-lg p-8 text-white"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <h1 className="text-3xl text-center font-medium">
          Sign Into Your Account
        </h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="flex flex-col gap-y-6 pt-12">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                onChange={(e) => changeHandler(e)}
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={password}
                onChange={(e) => changeHandler(e)}
                minLength="6"
              />
            </div>
            <button
              className="button text-white origin-left rounded-lg font-medium py-3.5 w-24 text-center cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm mt-4">
          Dont have an account?{" "}
          <Link
            to="/register"
            className="redirect-btn relative transition-all duration-300 text-quinary font-semibold hover:text-primary"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
