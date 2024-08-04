import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeDark: false,
  },
  reducers: {
    switchTheme: (state) => {
      state.themeDark = !state.themeDark;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

const selectThemeState = state => state.theme;
export const selectTheme = state => selectThemeState(state).themeDark;

export default themeSlice.reducer;