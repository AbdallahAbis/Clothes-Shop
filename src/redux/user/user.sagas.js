import { takeLatest, put, call, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

import {
  singInSuccess,
  singInFailure,
  singOutSuccess,
  singOutFailure
} from "./user.actions";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield createUserProfileDocument(userAuth);
    const userSnapshot = yield userRef.get();
    yield put(singInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(singInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(singInFailure(error.message));
  }
}
function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(singInFailure(error.message));
  }
}
function* signOut() {
  try {
    auth.signOut();
    yield put(singOutSuccess());
    yield;
  } catch (error) {
    yield put(singOutFailure(error.message));
  }
}
function* isUserAuthenticated() {
  try {
    const userAth = yield getCurrentUser();
    yield getSnapshotFromUserAuth(userAth);
  } catch (error) {
    yield put(singInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
function* onUserSessionCheck() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserSessionCheck),
    call(onSignOut)
  ]);
}
