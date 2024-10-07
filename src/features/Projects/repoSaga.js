import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepoData } from "./getRepoData";
import { fetchRepoData, fetchRepoDataError, fetchRepoDataSuccess } from "./repoSlice";

function* fetchRepoDataHandler() {
  try {
    yield delay(2000);
    const repoData = yield call(getRepoData);
    yield put(fetchRepoDataSuccess(repoData));
  } catch (error) {
    yield put(fetchRepoDataError());
    yield call(alert, "Something went wrong!");
  }
};

export function* repoSaga() {
  console.log("Saga is connected!");
  yield takeLatest(fetchRepoData.type, fetchRepoDataHandler);
};