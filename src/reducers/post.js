import { postActionTypes } from "../actionTypes";

const defaultState = {
  id: '',
  timestamp: 0,
  title: '',
  body: '',
  author: '',
  category: '',
  voteScore: 0,
  deleted: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case postActionTypes.REQUEST_POST:
      return state;
    case postActionTypes.REQUEST_POST_SUCCESS:
      return action.post;
    case postActionTypes.REQUEST_POST_FAILURE:
      return state;

    case postActionTypes.CREATE_POST:
      return state;
    case postActionTypes.CREATE_POST_SUCCESS:
      return action.post;
    case postActionTypes.CREATE_POST_FAILURE:
      return state;

    case postActionTypes.DELETE_POST:
      return state;
    case postActionTypes.DELETE_POST_SUCCESS:
      return action.post;
    case postActionTypes.DELETE_POST_FAILURE:
      return state;

    // case courseActionTypes.EDIT_COURSE:
    //   return state;
    // case courseActionTypes.EDIT_COURSE_SUCCESS:
    //   return action.course;
    // case courseActionTypes.EDIT_COURSE_FAILURE:
    //   return state;
    //
    // case courseActionTypes.CREATE_REVIEW:
    //   return state;
    // case courseActionTypes.CREATE_REVIEW_SUCCESS:
    //   return action.review;
    // case courseActionTypes.CREATE_REVIEW_FAILURE:
    //   return state;

    default:
      return state;
  }
};
