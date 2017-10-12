import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
import { checkForErrors, dispatchValidationError } from "./util";
import { postActionTypes } from "../actionTypes";
import { redirectActions } from '../actions';

/*
* GET /posts/:id
*/

export function requestPost() {
  return {
    type: postActionTypes.REQUEST_POST
  };
}

export function requestPostSuccess(data) {
  return {
    type: postActionTypes.REQUEST_POST_SUCCESS,
    post: data
  };
}

export function requestPostFailure(err) {
  return {
    type: postActionTypes.REQUEST_POST_FAILURE,
    err: err
  };
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost());
    return fetch(`${apiRoot}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'guil',
        'Content-Type': "application/json"
      }
    })
      .then(response => response.json())
      .then(data => dispatch(requestPostSuccess(data)))
      .catch(err => dispatch(requestPostFailure(err)));
  };
}

/*
* POST /posts
*/

export function createPost() {
  return {
    type: postActionTypes.CREATE_POST
  };
}

export function createPostSuccess(data) {
  return {
    type: postActionTypes.CREATE_POST_SUCCESS,
    post: data
  };
}

export function createPostFailure(err) {
  return {
    type: postActionTypes.CREATE_POST_FAILURE,
    err: err
  };
}

export function sendCreatePost(post) {
  return dispatch => {
    dispatch(createPost());
    return fetch(`${apiRoot}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'guil',
      }
    })
      .then(checkForErrors)
      .then(() => dispatch(redirectActions.redirectTo(`/`)))
      .catch(dispatchValidationError(dispatch));
  };
}
