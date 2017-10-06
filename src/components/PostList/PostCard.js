import React from 'react';
import { NavLink } from 'react-router-dom';

const PostCard = props => (
  <div className="grid-33">
    <NavLink className="course--module course--link" to="/">
      <h4 className="course--label">Author</h4>
      <h3 className="course--title">Title</h3>
    </NavLink>
  </div>
);

export default PostCard;
