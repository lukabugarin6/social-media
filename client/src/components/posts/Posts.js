import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Loading from "../layout/Loading";
import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="landing flex flex-col pt-0 text-white justify-center items-center">
      {loading ? <Loading /> : (<Fragment><h1>Posts</h1><p>Welcome to the community</p>
      {/* PostForm */}
      <div className="posts">
          {posts && posts.map(post => (
              <PostItem key={post._id} post={post} />
          ))}
      </div>
      </Fragment> )}
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
