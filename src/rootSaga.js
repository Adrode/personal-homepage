import { all } from "redux-saga/effects";
import { repoSaga } from "./features/Projects/repoSaga";

export default function* rootSaga() {
  yield all([
    repoSaga(),
  ]);
}