import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map(post => <Post key={post.id} post={post} excerpt />);
  };

  return (
    <section>
      <div className="main">
        <h1>Posts</h1>
        {renderPosts()}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(PostsPage);
