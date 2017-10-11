import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postActions } from "../actions";

class PostDetail extends Component {

  componentDidMount() {
    this.props.onMount(this.props.match.params.id).then(({ post }) => {
      this.setState({
        ...this.state,
        ...post
      });
    });
  }

  render() {
    console.log(this.props.post)
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ post: state.post });

const mapDispatchToProps = dispatch => ({
  onMount: id => dispatch(postActions.fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
