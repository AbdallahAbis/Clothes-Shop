import { takeEvery, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./Shop.types";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./Shop.actions";

export function* fetchCollections() {
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

export function* onFetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
