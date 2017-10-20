import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postsActions } from '../../actions';

import PostCard from './PostCard';

class PostList extends Component {

  componentDidMount() {
    this.props.onMount();
  }

  onFilter(c) {
    this.props.onFilter(c);
  }

  render() {
    return (
      <div className="bounds">
        <nav>
          <span onClick={() => this.onFilter('react')}>React</span>
          <span onClick={() => this.onFilter('redux')}>Redux</span>
          <span onClick={() => this.onFilter('udacity')}>Udacity</span>
        </nav>

        {this.props.posts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(postsActions.fetchPostList()),
  onFilter: category => dispatch(postsActions.fetchPostCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
