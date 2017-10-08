import React from 'react';
import { NavLink } from 'react-router-dom';

const PostCard = props => (
  <div className="grid-33">
    <NavLink className="course--module course--link" to={`/posts/${props.post.id}`}>
      <h4 className="course--label">{props.post.author}</h4>
      <h3 className="course--title">{props.post.title}</h3>
      <p className="course--title">{props.post.body}</p>
      <span className="course--label">{props.post.category}</span>
    </NavLink>
  </div>
);

export default PostCard;
