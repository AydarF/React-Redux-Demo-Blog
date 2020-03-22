import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions/singlePostActions";
import { fetchComments } from "../actions/commentsActions";

import { Post } from "../components/Post";
import { Comment } from "../components/Comment";

const SinglePost = ({
  match,
  dispatch,
  post,
  hasErrors,
  loading,
  comments
}) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post...</p>;

    return <Post post={post} />;
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading comment...</p>;
    if (hasErrors.comments) return <p>Unable to display comments...</p>;

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section className="main">
      {renderPost()}
      <h3>Comments</h3>
      {renderComments()}
    </section>
  );
};

const mapStateToProps = state => ({
  post: state.post.post,
  comments: state.comments.comments,
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors }
});

export default connect(mapStateToProps)(SinglePost);
