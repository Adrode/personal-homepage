import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeDark: false,
  },
  reducers: {
    switchTheme: ({ themeDark }) => {
      themeDark = !themeDark;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const selectTheme = state => state.themeDark;

export default themeSlice.reducer;