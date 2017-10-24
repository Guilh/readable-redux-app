import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postActions } from "../actions";
import { commentsActions } from '../actions';

import Comments from '../components/Comments';

class PostDetail extends Component {

  componentDidMount() {
    this.props.onMount(this.props.match.params.id);
    this.props.displayComments(this.props.match.params.id);
  }

  render() {

    console.log(this.props.comments);
    return (
      <div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">
                {this.props.post.category}
              </h4>
              <h3 className="course--title">
                {this.props.post.title}
              </h3>
              <p>
                By {this.props.post.author}
              </p>
              <span>{this.props.post.voteScore}</span>
            </div>
            <div className="course--description">
              <p>{this.props.post.body}</p>
            </div>
            <h2>Comments</h2>
            <Comments comments={this.props.comments} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ post: state.post, comments: state.comments, id: state.post.id });

const mapDispatchToProps = dispatch => ({
  onMount: id => dispatch(postActions.fetchPost(id)),
  displayComments: id => dispatch(commentsActions.fetchCommentList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
