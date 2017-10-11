import { redirectActionTypes } from "../actionTypes";

export function redirectTo(path) {
  return {
    type: redirectActionTypes.REDIRECT,
    path
  };
}

export function clearRedirect() {
  return {
    type: redirectActionTypes.CLEAR_REDIRECT
  }
}
