import fetch from 'isomorphic-fetch';
import { apiRoot } from "../config";
import { postsActionTypes } from '../actionTypes';

export function requestPostList() {
  return {
    type: postsActionTypes.REQUEST_POST_LIST
  };
}

export function requestPostListSuccess(data) {
  return {
    type: postsActionTypes.REQUEST_POST_LIST_SUCCESS,
    posts: data
  };

}

export function requestPostListFailure(err) {
  return {
    type: postsActionTypes.REQUEST_POST_LIST_FAILURE,
    err: err
  };
}

export function fetchPostList() {
  return dispatch => {
    dispatch(requestPostList())
    return fetch(`${apiRoot}/posts`, {
      method: 'GET',
      headers: {
        'Authorization': 'guil',
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then( data => dispatch(requestPostListSuccess(data)))
    .catch(err => dispatch(requestPostListFailure(err)));
  };
}

/*
* GET /:category/posts
*/

export function requestCategoryList() {
  return {
    type: postsActionTypes.REQUEST_POST_CATEGORY
  };
}

export function fetchPostCategory(category) {
  return dispatch => {
    dispatch(requestCategoryList())
    return fetch(`${apiRoot}/${category}/posts`, {
      method: 'GET',
      headers: {
        'Authorization': 'guil',
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then( data => dispatch(requestPostListSuccess(data)))
    .catch(err => dispatch(requestPostListFailure(err)));
  };
}
