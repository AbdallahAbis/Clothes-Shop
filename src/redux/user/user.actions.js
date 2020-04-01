import UserActionTypes from "./user.types";

export const googleSingInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSingInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const singInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});
export const singInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
