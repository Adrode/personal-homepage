import { all } from "redux-saga/effects";
import { repoSaga } from "./features/Projects/repoSaga";
import { themeSaga } from "./features/themeSaga";

export default function* rootSaga() {
  yield all([
    themeSaga(),
    repoSaga(),
  ]);
}