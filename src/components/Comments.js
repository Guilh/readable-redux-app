import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class Comments extends Component {

  render() {
    return (
      this.props.comments.map(comment =>
        <div key={comment.id}>
          <NavLink to={`/comments/${comment.id}`}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <span>{comment.timestamp}</span>
          </NavLink>
        </div>
      )
    );
  }
}

export default Comments;
