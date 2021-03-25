import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import CustomSelect from '../layout/CustomSelect';

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const professionalStatusArray = ['Developer', 'Junior Developer','Senior Developer','Manager','Student or Learning', 'Instructor','Intern','Other']

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState(initialState);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSelectChange = (value) => 
    setFormData({...formData,status: value})

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="landing flex pt-0 text-white justify-center items-center">
      <div
        className="form-card no-profile-screen rounded-lg p-8 text-white w-1/3"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid #fff",
        }}
      >
        <h1 className="text-white text-5xl">Create Your Profile</h1>
        <small className='text-gray-500 block my-2'>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
             <CustomSelect defText={professionalStatusArray[0]} optList={professionalStatusArray} onSelectChange={onSelectChange} />
            {/* <select name="status" value={status} onChange={onChange}>
            
              <option>* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select> */}
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={company}
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                onChange={onChange}
              />
              <small className="form-text">
                Could be your own company or one you work for
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Website"
                name="website"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={website}
                onChange={onChange}
              />
              <small className="form-text">
                Could be your own or a company website
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={location}
                onChange={onChange}
              />
              <small className="form-text">
                City & state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Skills"
                name="skills"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={skills}
                onChange={onChange}
              />
              <small className="form-text">
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Github Username"
                name="githubusername"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={githubusername}
                onChange={onChange}
              />
              <small className="form-text">
                If you want your latest repos and a Github link, include your
                username
              </small>
            </div>
            <div className="form-group">
              <textarea
                placeholder="A short bio of yourself"
                name="bio"
                className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                value={bio}
                onChange={onChange}
              />
              <small className="form-text">
                Tell us a little about yourself
              </small>
            </div>
          </div>
          {/* <div className="">
              <button
                // onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type="button"
                className="btn btn-light"
              >
                Add Social Network Links
              </button>
              <span>(Optional)</span>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                  value={youtube}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                  value={linkedin}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  className="bg-quaternary text-white placeholder-white pl-3.5 py-3.5 rounded-lg"
                  value={instagram}
                  onChange={onChange}
                />
              </div>
            </div> */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="button text-white origin-left rounded-lg font-medium py-3.5 mt-6 w-32 text-center cursor-pointer"
            >
              Submit
            </button>
            <Link
              className="redirect-btn relative transition-all duration-300 text-lg text-quinary font-medium hover:text-secondary"
              to="/dashboard"
            >
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
