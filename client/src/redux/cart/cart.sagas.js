import { all, call, takeLatest, put } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import userActionTypes from "../user/user.types";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccessClearCart() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccessClearCart)]);
}
