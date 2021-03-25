import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="text-center text-quinary gap-x-16 text-lg flex items-center">
      <li>
        <button
          className="button text-white origin-left rounded-lg font-medium py-2.5 w-20 text-center text-base cursor-pointer"
          type="submit"
        >
          <Link to="/posts">Posts</Link>
        </button>
      </li>
      <li>
        <Link
          className="redirect-btn relative transition-all duration-300 text-xl text-quinary font-medium hover:text-secondary"
          onClick={logout}
          to="#!"
        >
          Logout
        </Link>
      </li>
    </ul>
  );

  // const guestLinks = (
  //   <ul className="flex justify-center w-full absolute left-0 w-full text-center text-quinary gap-x-10 text-lg">
  //     <li className="">Profiles</li>
  //     <li>Register</li>
  //     <li>Login</li>
  //   </ul>
  // );

  return (
    <header className="absolute w-full">
      <nav className="relative w-full text-white px-24 py-4 flex justify-between items-center w-full">
        <div className="logo text-5xl">
          <Link to="/">devcom</Link>
        </div>
        {!loading && <Fragment>{isAuthenticated && authLinks}</Fragment>}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
