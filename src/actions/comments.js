import fetch from 'isomorphic-fetch';
import { apiRoot } from "../config";
import { commentsActionTypes } from '../actionTypes';

// GET /posts/:id/comments

export function requestCommentList() {
  return {
    type: commentsActionTypes.REQUEST_COMMENT_LIST
  };
}

export function requestCommentListSuccess(data) {
  return {
    type: commentsActionTypes.REQUEST_COMMENT_LIST_SUCCESS,
    comments: data
  };

}

export function requestCommentListFailure(err) {
  return {
    type: commentsActionTypes.REQUEST_COMMENT_LIST_FAILURE,
    err: err
  };
}

export function fetchCommentList(id) {
  return dispatch => {
    dispatch(requestCommentList())
    return fetch(`${apiRoot}/posts/${id}/comments`, {
      method: 'GET',
      headers: {
        'Authorization': 'guil',
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then( data => dispatch(requestCommentListSuccess(data)))
    .catch(err => dispatch(requestCommentListFailure(err)));
  };
}
