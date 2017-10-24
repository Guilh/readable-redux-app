import { commentsActionTypes } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case commentsActionTypes.REQUEST_COMMENT_LIST:
      return state;
    case commentsActionTypes.REQUEST_COMMENT_LIST_SUCCESS:
      return action.comments;
    case commentsActionTypes.REQUEST_COMMENT_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};
