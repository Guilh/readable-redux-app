import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Title</h4>
              <input
                type="text"
                placeholder="Post Title..."
                className="input-title course--title--input"
              />

            <h4 className="course--label">Author</h4>
              <input
                type="text"
                placeholder="Post Author..."
                className="input-title course--title--input"
              />

              <a className="button">Save</a>
              <NavLink className="button button-secondary" to={`/`}>
                Cancel
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
