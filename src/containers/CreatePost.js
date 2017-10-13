import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { postActions } from "../actions";

class CreatePost extends Component {

  state = {
      title: "",
      author: "",
      category: "",
      body: "",
      id: Date.now().toString(),
      timestamp: Date.now()
  };

  changeHandler(formField, value) {
    this.setState({
      ...this.state,
      [formField]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <label className="course--label">Title</label>
              <input
                type="text"
                placeholder="Post Title..."
                className="input-title"
                onChange={e => {
                  this.changeHandler("title", e.target.value);
                }}
                value={this.state.title}
              />

              <label className="course--label">Author</label>
              <input
                type="text"
                placeholder="Post Author..."
                className="input-title"
                onChange={e => {
                  this.changeHandler("author", e.target.value);
                }}
                value={this.state.author}
              />

              <label className="course--label">Category</label>
              <select className="input-title"
                onChange={e => {
                  this.changeHandler("category", e.target.value);
                }}
                value={this.state.category}>
                <option>-- select --</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select><br />

              <label className="course--label">Body</label>
              <textarea
                onChange={e => {
                  this.changeHandler("body", e.target.value);
                }}
                value={this.state.body}
              />

              <a className="button" onClick={this.onSubmit.bind(this)}>
                Save
              </a>
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

const mapDispatchToProps = dispatch => ({
  onSubmit: (post) =>
    dispatch(postActions.sendCreatePost(post))
});

export default connect(null, mapDispatchToProps)(CreatePost);
