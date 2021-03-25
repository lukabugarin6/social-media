import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <div className="landing px-40 py-8 flex justify-center items-center">
      {loading && profile === null ? (
        <Loading />
      ) : (
        <Fragment>
          {profile !== null ? (
            <Fragment>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />

              <div className="my-2">
                <button onClick={() => deleteAccount()}>
                  Delete My Account
                </button>
              </div>
            </Fragment>
          ) : (
            // <div
            //   className="no-profile-screen absolute w-full h-full flex justify-center items-center"
            //   style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            // >
            <div
              className="no-profile-screen__inner flex flex-col justify-end rounded-lg p-8 text-white w-2/5 text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid #fff",
              }}
            >
              <p className="text-6xl font-medium my-2">
                Welcome {user && user.name}!
              </p>
              <p className="text-4xl font-medium">
                You have not yet setup a profile, please add some info.
              </p>
              <div className="buttons mt-8">
                <button className="button text-white rounded-lg font-medium py-3.5 w-32 text-center cursor-pointer">
                  <Link to="/create-profile">Create Profile</Link>
                </button>
                <button className="button text-white rounded-lg mx-4 my-6 font-medium py-3.5 w-32 text-center cursor-pointer">
                  <Link to="/create-profile">I'll do it later</Link>
                </button>
              </div>
            </div>
            // </div>
          )}
        </Fragment>
      )}
      {/* <Loading /> */}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
