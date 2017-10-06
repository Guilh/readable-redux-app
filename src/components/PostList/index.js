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
    console.log(this.props.posts)
    return (
      <div className="bounds">
        <PostCard />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
