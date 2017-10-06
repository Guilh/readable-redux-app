import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
import { postActionTypes } from "../actionTypes";

/*
* GET /api/courses/:id
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
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then(response => response.json())
      .then(({ data }) => dispatch(requestPostSuccess(data[0])))
      .catch(err => dispatch(requestPostFailure(err)));
  };
}
