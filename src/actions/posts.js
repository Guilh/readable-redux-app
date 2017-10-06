import fetch from 'isomorphic-fetch'
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
    courses: data
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
    return fetch(`${apiRoot}/categories`, {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => response.json())
    .then(({ data }) => dispatch(requestPostListSuccess(data)))
    .catch(err => dispatch(requestPostListFailure(err)));
  };
}
