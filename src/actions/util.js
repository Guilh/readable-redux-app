import { errorActions } from "../actions";

const jsonErrorPromise = response => {
  return new Promise((resolve, reject) => {
    response.json().then(reject);
  });
};

export const checkForErrors = response => {
  if (response.status >= 300) {
    return jsonErrorPromise(response);
  }
  return response;
};

export const dispatchValidationError = dispatch => ({ errors }) => {
  dispatch(errorActions.raiseValidationError(errors));
};
