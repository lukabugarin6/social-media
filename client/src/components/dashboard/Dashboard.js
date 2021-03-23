import React, { useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <div className="landing px-40 py-8 flex items-end pb-32">
      {loading && profile === null ? (
        <Loading />
      ) : (
        <Fragment>
          <h1>Dashboard</h1>
          <p>Welcome {user && user.name}</p>
          {profile !== null ? (
            <Fragment><DashboardActions /></Fragment>
          ) : (
            <Fragment>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to="/create-profile">
                Create Profile
              </Link>
            </Fragment>
          )}
        </Fragment>
      )}
      {/* <Loading /> */}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
