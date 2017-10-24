import React, { Component } from 'react';
import { connect } from "react-redux";

import Comment from './Comment';

import { bindActionCreators } from 'redux';
import { commentsActions } from '../../actions';

class Comments extends Component {

  componentDidMount(id) {
    this.props.onMount(this.props.id);
    console.log(this.props.id);
  }

  render() {
    console.log(this.props.comments);
    return(
      this.props.comments.map(comment => <Comment comments={comment} key={comment.id} />)
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments, id: state.post.id });
const mapDispatchToProps = dispatch => ({
  onMount: (id) =>
    dispatch(commentsActions.fetchCommentList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
