import React from 'react';

const Comment = props => (
  <div>
    <p>{props.comments.author}</p>
    <p>{props.comments.body}</p>
    <span>{props.comments.timestamp}</span>
  </div>
);

export default Comment;
