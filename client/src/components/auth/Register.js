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
    <div className="landing flex justify-center items-center">
      <div className="form-card rounded-lg p-8 text-white">
      <h1 className='text-3xl text-center font-medium'>Create Your Account Now For Free</h1>
      <Alert />
      <form onSubmit={(e) => submitHandler(e)}>
        <div className='flex flex-col gap-y-6 pt-12'> 

        <div className='flex flex-col'>
          <input
            type="text"
            placeholder="Name"
            className='bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-sm'
            value={name}
            onChange={(e) => changeHandler(e)}
            name="name"
            required
          />
        </div>
        <div className='flex flex-col relative'>
          <input
            type="email"
            placeholder="Email Address"
            className='bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-sm'
            value={email}
            onChange={(e) => changeHandler(e)}
            name="email"
          />
          <small className='text-xs absolute bottom-0 transform translate-y-full font-medium'>
            This site uses Gravatar so if you want a profile image use a
            gravatar email
          </small>
        </div>
        <div className='flex flex-col'>
          <input
            type="password"
            placeholder="Password"
            className='bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-sm'
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
            minLength="6"
          />
        </div>
        <div  className='flex flex-col'>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className='bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-sm'
            value={confirmPassword}
            onChange={(e) => changeHandler(e)}
            minLength="6"
          />
        </div>
        <button type="submit" className='button text-white rounded-lg font-medium py-3.5 w-24 text-center cursor-pointer'>Register</button>
        </div>
      </form>
      <p className='text-sm mt-4'>
        Already have an account? <Link to="/login" className='transition-all duration-300 text-quinary font-semibold hover:text-primary'>Sign In</Link>
      </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
