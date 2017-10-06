import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postsActions } from '../../actions';

import PostCard from './PostCard';

class PostList extends Component {
  render() {
    return (
      <div className="bounds">
        <PostCard />
      </div>
    );
  }
}


export default PostList;
