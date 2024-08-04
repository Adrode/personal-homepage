import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    repos: [
      {
        id: 0,
        kekw: "kekw",
      }
    ],
    loading: false,
  },
  reducers: {
    fetchRepoData: state => {
      state.loading = true;
    },
    fetchRepoDataSuccess: (state, { payload: repoData }) => {
      state.repos = repoData;
      state.loading = false;
    },
    fetchRepoDataError: state => {
      state.loading = false;
    }
  }
});

const selectRepoState = state => state.repo;

export const {
  fetchRepoData,
  fetchRepoDataSuccess,
  fetchRepoDataError,
} = repoSlice.actions;

export const selectRepoData = state => selectRepoState(state).repos;

export const selectLoadingStatus = state => selectRepoState(state).loading;

export default repoSlice.reducer;