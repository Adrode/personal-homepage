import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectTheme, switchTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, theme);
};

export function* themeSaga() {
    yield takeEvery(switchTheme.type, saveThemeInLocalStorageHandler);
};