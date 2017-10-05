import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = props => (
  <div className="grid-33">
    <NavLink className="course--module course--link" to="/">
      <h4 className="course--label">Post</h4>
      <h3 className="course--title">this is the post</h3>
    </NavLink>
  </div>
);

export default Post;
