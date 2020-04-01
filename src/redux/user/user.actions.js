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

export const singOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const singOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const singOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
