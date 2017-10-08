import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postsActions } from '../../actions';

import PostCard from './PostCard';

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => bindActionCreators({
  onMount: () => postsActions.fetchPostList()
}, dispatch);

class PostList extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="bounds">
        {this.props.posts.map(post =>
          <PostCard  key={post.id} post={post} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
