import { all, call } from "redux-saga/effects";
import { onFetchCollectionsStart } from "./shop/Shop.sagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
