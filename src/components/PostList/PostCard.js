import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { postActions } from "../../actions";

import moment from 'moment';

class PostCard extends Component {

  onSubmit() {
    this.props.onSubmit(this.props.post.id);
  }

  render() {
    return (
      <div className="grid-33">
        <div className="course--module">
          <NavLink className="course--link" to={`/posts/${this.props.post.id}`}>
            <h4 className="course--label">{this.props.post.author}</h4>
            <h3 className="course--title">{this.props.post.title}</h3>
          </NavLink>
            <p className="course--title">{this.props.post.body}</p>
            <span className="course--label">{this.props.post.category}</span>
          <a className="button" onClick={this.onSubmit.bind(this)}>x delete</a>
          <p>{ moment(this.props.timestamp).format('M/D/YY h:mma') }</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ id: state.post.id });

const mapDispatchToProps = dispatch => ({
  onSubmit: (id) =>
    dispatch(postActions.sendDeletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
