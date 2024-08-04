import { all } from "redux-saga/effects";
import { repoSaga } from "./Projects/repoSaga";

export default function* rootSaga() {
  yield all([
    repoSaga(),
  ]);
}