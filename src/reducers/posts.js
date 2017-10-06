import { postsActionTypes } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case postsActionTypes.REQUEST_POST_LIST:
    default:
      return state;
  }
};
