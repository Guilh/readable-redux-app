import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100 flex">
              <NavLink className="button" to="/create-post">
                Create Post
              </NavLink>
              <nav className="category--nav">
                Categories:
                <span onClick={() => this.onFilter('react')}>React</span>
                <span onClick={() => this.onFilter('redux')}>Redux</span>
                <span onClick={() => this.onFilter('udacity')}>Udacity</span>
                <span onClick={() => this.componentDidMount()}>All</span>
              </nav>
            </div>
          </div>
        </div>


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
