import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
