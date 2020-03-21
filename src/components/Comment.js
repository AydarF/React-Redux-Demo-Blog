import React from "react";

export const Comment = ({ comment }) => {
  return (
    <article className="comment">
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </article>
  );
};
