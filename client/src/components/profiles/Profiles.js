import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import ProfileItem from './ProfileItem';
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1>Developers</h1>
          <p>Browse and connect with developers</p>
          <div>
            {profiles.length > 0 ? profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
            )) : ''}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
