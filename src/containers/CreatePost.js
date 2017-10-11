import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { postActions } from "../actions";

class CreatePost extends Component {

  state = {
    steps: [{ title: "", description: "", body: "" }]
  };

  changeHandler(formField, value) {
    this.setState({
      ...this.state,
      [formField]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state, this.props.auth);
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
              <select className="input-title">
                <option>React</option>
                <option>Redux</option>
                <option>Udacity</option>
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

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => ({
  onMount: id => dispatch(postActions.fetchPost(id)),
  onSubmit: (post) =>
    dispatch(postActions.sendCreatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
