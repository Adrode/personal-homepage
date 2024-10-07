import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from "react-redux";
import { GlobalStyle } from './GlobalStyle';
import { theme } from "./theme";
import App from './App';
import { ThemeProvider } from 'styled-components';
import store from "./store";
import { selectTheme } from './features/themeSlice';

const Main = () => {
  const themeDark = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        $dark={themeDark}
      />
      <App />
    </ThemeProvider>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);