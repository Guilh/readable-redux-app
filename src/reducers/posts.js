import { postsActionTypes } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case postsActionTypes.REQUEST_POST_LIST:
      return state;
    case postsActionTypes.REQUEST_POST_LIST_SUCCESS:
      return action.posts;
    case postsActionTypes.REQUEST_POST_LIST_FAILURE:
      return state;
    case postsActionTypes.REQUEST_POST_CATEGORY:
      return state;
    default:
      return state;
  }
};
